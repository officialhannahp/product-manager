const express = require('express');
const cors = require('cors') 
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 8000;

require('./config/mongoose.config');
require('./routes/routes')(app);
    
app.listen(8000, () => console.log(`Listening on port 8000`) );
