var http = require('http');
var api = require('./functions');


// ApiServer.get('/users', (req,res) => {
//     api.getUsers(req,res);
// });

/**
 * Create HTTP server.
 */
const port = '9000';

const server = http.createServer(function(req, res){
    switch(req.method){
        case 'GET' :

            // Define number pattern
            const numberPattern  = "[0-9]+";
            const usersPattern = new RegExp("/users/" + numberPattern);

            if(req.url === '/'){
                res.end();
            }
            else if(req.url === '/users'){
                api.getUsers(req,res);
            }

            else if(usersPattern.test(req.url)){
                // api.getUsers(req,res);
                let pattern = new RegExp(numberPattern);
                const userId = pattern.exec(req.url);
                api.getUserById(req,res,userId);
            }

            else if(req.url === '/domains'){
                api.getDomains(req,res);
            }

            break;
        case 'POST' :
            break;
        case 'PUT' :
            break;

        case 'DELETE' :
            break;

        default :
            break;
    }
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port,function(err){
    if(err)
        return console.log('Error running the server', err);
    else {
        console.log('API Server listening in port: ' + port)
    }

});

