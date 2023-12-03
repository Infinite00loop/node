// console.log("Hello world")
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    // console.log('samriddhi')
    const url=req.url;
    const method=req.method;
    // console.log(url);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My Page</title></head>');
    // if(url==='/home'){
    //     res.write('<body><h1>Welcome Home</h1></body>');
    // }
    // else if(url==='/about'){
    //      res.write('<body><h1>Welcome to About Us page</h1></body>');
    // }
    // else if(url==='/node'){
    //      res.write('<body><h1>Welcome to my Node js Project</h1></body>');
    // }
    // res.write('</html>');
    // res.end();

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Messaage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data' , (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end' ,()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message= parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt' ,message ,err=>{
                res.statusCode=302;
                res.setHeader('Location' ,'/');
                return res.end();
            });
        });
    }
});
server.listen(4000);