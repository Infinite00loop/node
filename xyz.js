const fs= require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data' , (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end' ,()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=  parsedBody.split('=')[0];
            console.log(message);
            fs.writeFile('message.txt' ,message ,err=>{
                res.statusCode=302;
                res.setHeader('Location' ,'/');
                return res.end();
            });
        });
    }
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Messaage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
};
module.exports={
    handler: requestHandler,
    someText:'Some hard coded text'
};