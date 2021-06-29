const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_manager_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connected"))
    .catch(err => console.log("Something went worng"))