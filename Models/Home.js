// database
const sql = require('mssql')
var db = require('../SQLCONFIG.js');

async function connectDB(){
  const pool = new sql.ConnectionPool(db)
  
  try{
    await pool.connect()
    console.log("Successfully connected to DB")
    return pool
  }catch(err)
  {
    console.error("ERROR : "+err)
    return err
  }
}

module.exports.getIntro = async ()=>{
  const database = await connectDB();
  try{
    let result = await database.request().query("select * from title").then((data)=>{
      console.log("Successfully retreived data")
      return data.recordset
    })
    return result
  }catch(err)
  {
    console.error(err)
  }
  finally
  {
    database.close()
  }
}
/*
    select 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team, 
        JSON_QUERY((select CONCAT('["',STRING_AGG([imgsrc], '","'),'"]') as "imgsrc" from images i, projects pn where pn.id = i.prjRef and pn.id = p.id for json path)) as "imgsrc"
    from    projects p ,  
        team t
    where   t.id = p.team
    FOR JSON PATH
*/
module.exports.getProjects = async ()=>{
  const database = await connectDB();
  try{
    let result = await database.request().query(`
    select 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team, 
        CONCAT('["',STRING_AGG(imgsrc,'", "'),'"]') as "imgsrc"
    from    projects p ,  
        team t, images i
    where   t.id = p.team and p.id = i.prjRef
    group by 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team
    FOR JSON PATH
    `).then((data)=>{
      
      return data.recordset
    })
    return result
  }catch(err)
  {
    console.error(err)
  }
  finally
  {
    database.close()
  }
}

module.exports.getProject = async (id)=>{
  const database = await connectDB();
  try{
    console.log("ID:"+id)
    let result = await database.request().query(`
    select 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team,
        p.period, 
        JSON_QUERY((SELECT CONCAT('["',STRING_AGG([imgsrc], '","'),'"]') FROM images i, projects pn where pn.id = i.prjRef and pn.id = p.id)) as "imgsrc",
        JSON_QUERY((SELECT CONCAT('["',STRING_AGG([types], '","'),'"]') FROM types t, prj_types_bridge ptb where p.id = ptb.prjRef and t.id = ptb.typesRef)) as "types",
        JSON_QUERY((SELECT CONCAT('["',STRING_AGG([role], '","'),'"]') FROM roles r, prj_roles_bridge prb where p.id = prb.prjRef and r.id = prb.rolesRef)) as "roles"
    from    projects p ,  team t
    where   t.id = p.team and p.id = ${id}
    FOR JSON PATH
    `).then((data)=>{
      
      return data.recordset
    })
    return result
  }catch(err)
  {
    console.error(err)
  }
  finally
  {
    database.close();
  }
}