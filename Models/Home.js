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

module.exports.getProjects = async ()=>{
  try{
    let result = await new sql.Request().query("select * from projects").then((data)=>{
      console.log("Successfully retreived data")
      return data
    })
    return result
  }catch(err)
  {
    console.log(err)
  }
}