var db = require('./db');

exports.getUsers = (req,res) => {
    db.executeSql("SELECT * FROM users",null, (results) => {
        // res.send(results);
        res.writeHead(200,
            {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        );

        res.write(JSON.stringify(results));
        res.end();
    });

};

exports.getUserById = (req,res, userId) => {
    db.executeSql("SELECT * FROM users WHERE user_id = ? ",userId, (results) => {
        // res.send(results);
        res.writeHead(200,
            {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        );

        res.write(JSON.stringify(results));
        res.end();
    });

};

exports.getDomains = (req,res) => {

    const sql = "SELECT * FROM domains " +
                "LEFT JOIN users " +
                "ON domains.owner = users.user_id";


    db.executeSql(sql,null, (results) => {
        // res.send(results);
        res.writeHead(200,
            {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        );

        res.write(JSON.stringify(results));
        res.end();
    });

};