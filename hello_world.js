const path= require('path');

const http=require('http');

const express = require('express');
const bodyParser=require('body-parser');

const connectController=require('./controllers/connect');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contact',contactRoutes);

app.post('/success',connectController.success);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


    
        
app.listen(4000);