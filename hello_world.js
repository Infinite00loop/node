
const http=require('http');

const xyz = require('./xyz');
const server=http.createServer(xyz);
    
        
server.listen(4000);