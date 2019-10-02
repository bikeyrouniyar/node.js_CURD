var express=require('express');
var router=express.Router();

const productController=require('../controllers/product.controller');

router.post('/create',productController.productCreate);
router.get('/:id',productController.findProduct);
router.put('/:id',productController.editProduct);
router.delete('/:id/delete',productController.deleteProduct);
module.exports=router;
