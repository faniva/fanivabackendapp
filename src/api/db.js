var mysql = require('mysql');

exports.executeSql = function(sql, values, callback){

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'promotionfxbackend'
    });

    conn.connect(function(error){
        if(error){
            console.error(error);
        } else {
            console.log('Successfully connected to db!')
        }
    });

    let query = conn.query(sql, values, function(err, results){
        if(err) throw err;

        // Query was successful
        console.log(query.sql);
        console.log(results);

        if(callback && typeof callback === 'function'){
            callback(results);
        }
    })

};


