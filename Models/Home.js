// database
const sql = require('mssql')
var db = require('../SQLCONFIG.js');

(async () =>{
  sql.connect(db,(err)=>{
    if(err)
    {
      console.log("ERROR : "+err)
      return
    }
    console.log("Successfully connected to DB")
  })
})()

module.exports.getIntro = async ()=>{
  try{
    let result = await new sql.Request().query("select * from title").then((data)=>{
      console.log("Successfully retreived data")
      return data
    })
    return result
  }catch(err)
  {
    console.log(err)
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
  try{
    let result = await new sql.Request().query(`
    select 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team, 
        (select imgsrc as "path" from images i, projects pn where pn.id = i.prjRef and pn.id = p.id for json path) as "imgsrc"
    from    projects p ,  team t
    where   t.id = p.team
    FOR JSON PATH
    `).then((data)=>{
      
      return data
    })
    return result
  }catch(err)
  {
    console.log(err)
  }
}

module.exports.getProject = async (id)=>{
  try{
    console.log("ID:"+id)
    let result = await new sql.Request().query(`
    select 
        p.id, 
        p.name, 
        p.descriptions, 
        p.scale, 
        p.priority, 
        t.team,
        p.period, 
        (select imgsrc as "path" from images i, projects pn where pn.id = i.prjRef and pn.id = p.id for json path) as "imgsrc",
        (select types as "type" from types t, prj_types_bridge ptb where p.id = ptb.prjRef and t.id = ptb.typesRef for json path) as "types",
        (select role as "role" from roles r, prj_roles_bridge prb where p.id = prb.prjRef and r.id = prb.rolesRef for json path) as "roles"
    from    projects p ,  team t
    where   t.id = p.team and p.id = ${id}
    FOR JSON PATH
    `).then((data)=>{
      
      return data
    })
    return result
  }catch(err)
  {
    console.log(err)
  }
}