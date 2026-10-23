const Aire = require('../models/aire.model');
const aireCtrl = {};

//Aqui leemos todos los aires acondicionados
aireCtrl.getAires = async (req, res) => {
    const aires = await Aire.find()
        .then(data =>{
            res.status(200).json({
                status: true,
                aires: data
            })
        }).catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

//Aqui leemos 1 aire por su id
aireCtrl.getAires = async (req, res) => {
    await Aire.findById(req.params.id)
        .then(data =>{
            if (data){
                res.status(200).json({
                    status: true,
                    aires: data
                })
            }else{
                res.status(404).json({
                    status:false,
                    message: 'Aire Acondicionado Not Found'
                })
            }

        }).catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

//Aqui añadimos un nuevo aire
aireCtrl.addAires = async (req, res) => {
    const myAires = new Aiers(req.body);
    await myAires.save()
        .then(data =>{
            res.status(201).json({
                status: true,
                message: 'Aire adicionado Creado'
            })
        }).catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

module.exports = aireCtrl;