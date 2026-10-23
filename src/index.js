const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const {mongoose} = require('./database');

// SETUP inicial
const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas principales con el prefijo indicado en el enunciado
app.use('/api/v2/airespepito', require('./routes/aire.route'));
app.use('/', (req, res) => res.json({
    message: 'La Api esta en /api/v2/airespepito'
}));

// Starting SERVER
app.listen(app.get('port'), () => {
    console.log('Api escuchando en el puerto: ' + app.get('port'));
})