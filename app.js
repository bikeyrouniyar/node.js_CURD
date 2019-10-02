var express=require('express');
var bodyParser=require('body-parser');
const mongoose=require('mongoose');

const product=require('./routes/product.routes');
const app=express();


//connecting mongodb
var url = 'mongodb://localhost:27017/product';
var mongoDB=url;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




app.use('/product',product);
app.listen(8000,()=>{
    console.log('I am listening to you');
})