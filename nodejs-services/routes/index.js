module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `student_details` ORDER BY student_details_id ASC"; // query database to get all data from the table student_details

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: Welcome to HELL | View Students Details
                ,student_details: result
            });
        });
    },
};