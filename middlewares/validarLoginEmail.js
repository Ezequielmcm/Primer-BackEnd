const Login = require('../models/loginModels')

const validarLoginEmail = async (req, res, next) => {
    const login = await Login.findOne({email: req.body.email})
    
    if (login) {
        res.status(400).json({msg: "El e-mail ya esta usado, por favor use otro e-mail"})
    } else {
        next();
    }
}

module.exports = validarLoginEmail;