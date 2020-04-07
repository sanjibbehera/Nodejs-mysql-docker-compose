var express = require('express');
var router = express.Router();
var connection  = require('../config/dbConfig');


/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM `student_details` ORDER BY student_details_id ASC',function(err,rows)     {
 
        if(err){
			res.redirect('/');   
        }else{
            
            res.render('index.ejs',{page_title:"Welcome to HELL | View Students Details - Node.js",student_details:rows});
        }
                            
         });
        
    });

module.exports = router;