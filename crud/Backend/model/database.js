const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    // id:Number,
    uname:String,
    uage:Number,
    urole:String,
    // ucontact:Number
})
module.exports=mongoose.model("User",userSchema)