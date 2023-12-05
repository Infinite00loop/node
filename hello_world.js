
const http=require('http');

const xyz = require('./xyz');
const server=http.createServer(xyz.handler);
    
        
server.listen(4000);