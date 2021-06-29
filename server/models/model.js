const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:[2, "title must be more than 2 characters"],
        required: [true, "you must enter a title"]
    },

    price: {
        type: Number,
        required: [true, "you must eneter pirce. it ain't free"]
    },

    desc: {
        type: String,
        minlength: [2, "description must be more than 2 charaters" ],
        required: [true, "description cannot be empty. pls tell wat it doooo"]
    }
}, { timesTamps: true })


const Product = mongoose.model("Product", ProductSchema)


module.exports = Product;
