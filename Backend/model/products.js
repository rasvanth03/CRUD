const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    pname: String,
    price: Number,
    quantity: Number
});

module.exports=mongoose.model("Products", ProductSchema)
