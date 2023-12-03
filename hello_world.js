// console.log("Hello world")
const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log('samriddhi')
    const url=req.url;
    console.log(url);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    if(url==='/home'){
        res.write('<body><h1>Welcome Home</h1></body>');
    }
    else if(url==='/about'){
         res.write('<body><h1>Welcome to About Us page</h1></body>');
    }
    else if(url==='/node'){
         res.write('<body><h1>Welcome to my Node js Project</h1></body>');
    }
    res.write('</html>');
    res.end();
});
server.listen(4000);