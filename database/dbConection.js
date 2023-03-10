const mongoose = require('mongoose')
require("dotenv").config();

const dbConection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Conectado a la base de datos...")
    } catch (error) {
        throw new error ("No se pudo conectar a la base de datos...")
    }
}

module.exports = dbConection;