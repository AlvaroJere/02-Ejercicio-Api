const mongoose = require('mongoose');
const {Schema} = mongoose;

const aireSchema = new Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    color: { type: String, required: true },
    precio: { type: Number, required: true },
    energia: { type: String, required: true },
    descripcion: { type: String, required: true },
}, {
        versionKey: false,
        timestamps: true,
        collection: 'misAires',
    });

module.exports = mongoose.model('Aire', aireSchema);