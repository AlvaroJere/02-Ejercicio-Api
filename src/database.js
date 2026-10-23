const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;

mongoose.connect(URL)
    .then(() => {
        console.log('Conectada a la Base de Datos');
    })
    .catch((err) => {
        console.error(err.message);
    })

module.exports = mongoose;