const express=require('express')
const router=express.Router();
const dbdetails=require('../model/database')

//create  user
router.post('/', async(req,res)=>{
    const user=new dbdetails(req.body)
    await user.save();
    console.log("New user saved:", user);
    res.status(201).json(user)
})
router.get('/', async (req,res)=>{
    const users=await dbdetails.find();
    res.json(users)
})
//update
router.get('/:id', async (req,res)=>{
   const update = await dbdetails.findById(req.params.id)
    res.send(update)
})

router.put('/:id',async (req,res)=>{
    await dbdetails.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
})
//delete
router.delete('/:id',async (req,res)=>{
    await dbdetails.findByIdAndDelete(req.params.id)
    res.json({message:"deleted"})
})
module.exports=router;