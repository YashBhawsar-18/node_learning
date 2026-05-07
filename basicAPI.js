const http = require('http');

const data = require('./empData');

// this api contains static data and is not connected to any database, so the data will be same for every request
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'application/json'});
    // response.write(JSON.stringify({name: "Yash", dept: "React JS", course: "Node JS"}));
    response.write(JSON.stringify(data));
    response.end();
}).listen(3000);