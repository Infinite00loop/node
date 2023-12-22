const express=require('express');

const router=express.Router();

router.get('/add-product' ,(req, res, next)=>{
    res.send(
        '<form action="/admin/add-product" method="POST" ><label>Product</label><input type="text" name="Product"><label>Size</label><input type="text" name="size"><button type="submit">Add</button></form>')

});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/');
});

module.exports=router;