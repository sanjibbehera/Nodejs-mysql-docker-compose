var mysql = require("mysql");
require('dotenv').config();

console.log('DBNAME:', process.env.DBNAME);

var connection=mysql.createConnection({
   host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PWD,
	database: process.env.DBNAME
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log(process.env.DBNAME, ' DB Connected!:)');
   }
 });

module.exports = connection;