const mongose = require('mongoose')

const Schema = mongose.Schema;

const productsSchema = new Schema ({
    product: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const Product = mongose.model("Product", productsSchema)

module.exports = Product