
const http=require('http');

const express = require('express');

const app=express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log('This always runs');
    next();
});

app.use('/add-product' ,(req, res, next)=>{
    console.log('In the middleware');
    res.send('<form action="/product" method="POST" ><label>Product</label><input type="text" name="Product"><label>Size</label><input type="text" name="size"><button type="submit">Add</button></form>')

});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});



// const server= http.createServer(app);
    
        
app.listen(4000);