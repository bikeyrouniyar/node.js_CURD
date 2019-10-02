const Product=require('../models/product.models');

exports.productCreate=function(req,res){
    let product=new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function(err){
        if(err) res.send(err)
        if(req.body.name==null ) res.send("name cannot be empty"); 
        if(req.body.price==null) res.send("price cannot be empty");
        res.send('product created');
    })
}

exports.findProduct=function(req,res){
    Product.findById(req.params.id, function(err,product){
        if(err) return next(err);
        res.send(product);
    })
}

exports.editProduct=function(req,res){
    Product.findByIdAndUpdate(req.params.id, {$set:req.body},function(err,product){
        if(err) return next(err);
        res.send(req.body);
    })
}

exports.deleteProduct=function(req,res){
    Product.findByIdAndDelete(req.params.id,function(err){
        if(err) return next(err);
        res.send("deleted");
    })
}




