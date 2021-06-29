const Product = require('../models/model');
// const { Product } = require('../models/model')

module.exports = {
    //Create
    createProduct: (req, res) => {
        console.log(req.body)
        Product.create(req.body)
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "error", error: err }))
    },

    //Read
    getAllProducts: (req, res) => {
        Product.find()
        .then(result => res.json({ message: "success", data: result }))
        .catch(err => res.json({ message: "error", error: err })) 
    },

    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
        .then(result => res.json({ message: "success", product: result }))
        
        .catch(err => res.json({ message: "error", error: err })) 
    },

    //Update
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.json({ message: "success", data: result }))
        .catch(err => res.json({ message: "error", error: err })) 
    },

    //Delete
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "success", data: result }))
        .catch(err => res.json({ message: "error", error: err })) 
    }

}