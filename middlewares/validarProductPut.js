const Product = require('../models/productsModels')

const validarProductPut = async (req, res, next) => {
    const product = await Product.findOne({product: req.body.product})
    
    if (product) {
        next();
    } else {
        res.status(400).json({msg: "El nombre de producto no se puede cambiar"})
    }
}

module.exports = validarProductPut;