var mysql = require("mysql");
require('dotenv').config();

function DataBaseHandler() {
    this.connection = null;
}

console.log('DBNAME:', process.env.DBNAME);
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_PWD:', process.env.DATABASE_PWD);

DataBaseHandler.prototype.createConnection = function () {

    this.connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PWD,
		database: process.env.DBNAME,
	    port: 3306
    });

    this.connection.connect(function (err) {
        if (err) {
            console.error("error connecting " + err.stack);
            return null;
        }
        console.log("connected as id " + this.threadId);
    });
    return this.connection;
};

module.exports = DataBaseHandler;