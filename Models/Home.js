// database
var db = require('../SQLCONFIG.js');

const { Connection } = require("tedious");
// Create connection to database
const config = {
  authentication: {
    options: {
      userName: db.userName, // update me
      password: db.password // update me
    },
    type: "default"
  },
  server: db.server.toString(), // update me
  options: {
    database: db.dbname, //update me
    encrypt: true
  }
};

const connection = new Connection(config);


var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

module.exports.combineHome = async function()
{
  console.log("combine called")
  
  request = new Request('select * from title', (err, rowCount) => {
    if (err) {
      console.error(err.message);
    } 
  })
  var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
  connection.execSql(request);
} 
