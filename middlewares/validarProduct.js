const Product = require('../models/productsModels')

const validarProduct = async (req, res, next) => {
    const product = await Product.findOne({product: req.body.product})
    
    if (product) {
        res.status(400).json({msg: "El producto ya existe, por favor ponga otro producto"})
    } else {
        next();
    }
}

module.exports = validarProduct;