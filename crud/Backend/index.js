const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const userrouter=require('./RouterFile/userrouter')
const productroute=require('./RouterFile/productroute')


const app=express()
app.use(cors(),express.json())

//connect database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database connected")
})
.catch(error=>{console.log(error)})

//export router
app.use('/user',userrouter);
app.use('/products',productroute);


//Check the port
app.listen(process.env.PORT,()=>{
    // console.log(process.env.PORT)
    console.log(`server is running in port ${process.env.PORT}`)
})
//port response is send
app.get('/user',(req,res)=>{
    res.send("port is running i am Rasvanth")
})
// app.get('/products',(req,res)=>{
//     res.send("product port is running")
// })

