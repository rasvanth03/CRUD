const express=require('express');
const router=express.Router();
const product=require('../model/products');

router.post('/', async(req,res)=>{
    const addpro=new product(req.body)
    await addpro.save();
    res.status(201).json(addpro)
})
router.get('/',async(req,res)=>{
    const getpro=await product.find()
    res.json(getpro)
})
router.get('/:id', async (req,res)=>{
    const update=await product.findById(req.params.id)
    res.json(update)
})
router.post('/:id', async (req,res)=>{
    await product.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"updated"})
})
module.exports=router;
