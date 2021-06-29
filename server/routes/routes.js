const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/controller')


module.exports = app => {
    //Create
    app.post('/api/products', createProduct);
    
    //Read
    app.get('/api/products', getAllProducts);
    app.get('/api/products/:id', getOneProduct);

    //Update
    app.put('/api/products/:id', updateProduct);

    //Delete
    app.delete('/api/products/:id', deleteProduct);

}