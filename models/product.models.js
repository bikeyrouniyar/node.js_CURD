var mongoose=require('mongoose');
const Schema=mongoose.Schema;


let ProductSchema=new Schema({
    name:{type:String, require:true, max: 100},
    price:{type:Number, require:true}
    
});

//exporting the model
module.exports=mongoose.model('Product',ProductSchema);