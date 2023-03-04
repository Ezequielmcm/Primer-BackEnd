const Login = require('../models/loginModels')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const getLogin = async (req, res) => {
    const login = await Login.find();
    
    res.status(200).json({login, msg: "Ok"})
}

const getLoginById = async (req, res) => {
    const login = await Login.findById(req.params.id)
    
    if (login !== undefined && login !== null) {
        res.status(200).json({login: login, msg: "Ok"})
    } else {
        res.status(404).json({login: null, msg: "El usuario no se ha podido encontrar"})
    }
}

const getLoginByName = async (req, res) => {
    const login = await Login.findOne({product: req.query.product})
    
    if (login !== undefined && login !== null){
        res.status(200).json({login, msg:"Ok"})
    } else {
        res.status(404).json({login: null, msg:"El usuario no ha sido encontrado"})
    }
}

const postLogin = async (req, res) => {
    try{
        const validationError = validationResult(req)
        if (validationError.isEmpty()){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt)
            
            //Armamos un usuario a medida para poder guardarlo en la base de datos sin su clave desencriptada
            const usuarioEncriptado = {
                username: req.body.username,
                fastname: req.body.fastname,
                password: hash,
                email: req.body.email
            }
            const user = new Login(usuarioEncriptado)
            await user.save();
            
            res.status(201).json({user: user.username, msg: "El usuario ha sido creado correctamente"})
        } else {
            res.status(400).json({msd: "Error en el registro de usuario", error: validationError.errors})
        }
    } catch (error){
        res.status(500).json({user: null, msg: "Hubo un error al crar el usuario - " + error.message})
    }
}

const updateLogin = async (req, res) => {
    try {
        const validationError = validationResult(req);
        if (validationError.isEmpty()) {
            await Login.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg:"Usuario actualizado"})
        } else {
            res.status(500).json({msg:"El usuario tiene problemas al actualizar - ", validationError})
        }
    } catch (error) {
        res.status(500).json({msg:"El usuario no se ha podido actualizar - " + error.message})
    }
}

const deleteLogin = async (req, res) => {
    try {
        await Login.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"El usuario fue eliminado correctamente"})
    } catch (error) {
        res.status(500).json({msg:"El usuario no se ha podido eliminar - " + error.message})
    }
}

module.exports = {getLogin, getLoginById, getLoginByName, postLogin, updateLogin, deleteLogin}