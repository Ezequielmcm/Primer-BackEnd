const Login = require('../models/loginModels')

const validarLoginPut = async (req, res, next) => {
    const login = await Login.findOne({email: req.body.email, passsword: req.body.passsword})
    
    if (login) {
        next();
    } else {
        res.status(400).json({msg: "Ponga un e-mail con contraseña valido"})
    }
}

module.exports = validarLoginPut;