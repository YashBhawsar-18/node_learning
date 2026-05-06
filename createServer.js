const http = require('http');

// general format of creating a server in node js
// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type' : "text/html" });
//     response.write("<h1>Hello World of Node Js from my 1st server</h1>");
//     response.end();
// }).listen(3000);

// create server method by passing a fucntion as parameter
const responseFunction = (request, response ) => {
    response.writeHead(200, {'Content-Type' : 'text/html' })
    response.write("<h1>Hello World of Node Js from my 2nd server</h1>");
    response.end();
}

http.createServer(responseFunction).listen(3000);
