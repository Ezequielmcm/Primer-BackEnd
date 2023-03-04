const Product = require('../models/productsModels')
const { validationResult } = require('express-validator')

const getProducts = async (req, res) => {
    const product = await Product.find();
    
    res.status(200).json({product, msg: "Ok"})
}

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if (product !== undefined && product !== null) {
        res.status(200).json({product: product, msg: "Ok"})
    } else {
        res.status(404).json({product: null, msg: "El producto no se ha podido encontrar"})
    }
}

const getProductByName = async (req, res) => {
    const product = await Product.findOne({product: req.query.product})
    
    if (product !== undefined && product !== null){
        res.status(200).json({product, msg:"Ok"})
    } else {
        res.status(404).json({product: null, msg:"El producto no ha sido encontrado"})
    }
}

const postProduct = async (req, res) => {
    try {
        const validationError = validationResult(req)
        if (validationError.isEmpty()) {
        const NewProduct = {
            product: req.body.product,
            price: req.body.price,
            description: req.body.description
        }
        const product = new Product(NewProduct)
        await product.save();
        
        res.status(201).json({producto: product, msg:"El producto fue agregado correctamente..."})
    } else {
        res.status(400).json({msg: "Error al agregar el producto", validationError})
    }
    } catch (error) {
        res.status(404).json({msg: "Error al agregar el producto, el producto no debe ser igual - " + error.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const validationError = validationResult(req)
        if (validationError.isEmpty()){
            await Product.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg:"Producto actualizado"})
        } else {
            res.status(400).json({msg: "Error al actualizar el producto", validationError})
        }
    } catch (error) {
        res.status(500).json({msg:"El producto no se ha podido actualizar - " + error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"El producto fue eliminado correctamente"})
    } catch (error) {
        res.status(500).json({msg:"El producto no se ha podido eliminar - " + error.message})
    }
}

module.exports = {getProducts, getProductById, getProductByName, postProduct, updateProduct, deleteProduct}