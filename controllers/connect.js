const path= require('path');

const rootDir=require('../util/path');

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
    
};

exports.success=(req,res,next)=>{
    res.send('<h1>Form successfully filled</h1>');
}