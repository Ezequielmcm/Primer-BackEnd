const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const loginSchema = new Schema ({
    username: {
        type: String,
        require: true
    },
    fastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const Login = mongoose.model("Login", loginSchema)

module.exports = Login;