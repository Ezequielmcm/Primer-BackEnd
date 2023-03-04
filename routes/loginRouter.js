const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const controlers = require('../controlers/loginConrolers')
const validarLoginEmail = require('../middlewares/validarLoginEmail')
const validarLoginPut = require('../middlewares/validarLoginPut')

router.get ("/", controlers.getLogin)
router.get ("/buscar", controlers.getLoginByName)
router.get ("/:id", controlers.getLoginById)

router.post (
    "/agregar", validarLoginEmail,
    [
        check("username").not().isEmpty().withMessage("El nombre de usuario es obligatorio"),
        check("fastname").not().isEmpty().withMessage("El apellido es obligatorio"),
        check("password").not().isEmpty().withMessage("La contraseña es obligatoria"),
        check("email").not().isEmpty().withMessage("El e-mail es obligatorio").isEmail().withMessage("Debe ingresar un e-mail válido"),
    ], 
    controlers.postLogin)

router.put ("/actualizar/:id", validarLoginPut,
    [
        check("username").not().isEmpty().withMessage("El nombre de usuario es obligatorio"),
        check("fastname").not().isEmpty().withMessage("El apellido es obligatorio"),
        check("password").not().isEmpty().withMessage("La contraseña es obligatoria"),
        check("email").not().isEmpty().withMessage("El e-mail es obligatorio").isEmail().withMessage("Debe ingresar un e-mail válido"),
    ],
    controlers.updateLogin)

router.delete ("/eliminar/:id", controlers.deleteLogin)

module.exports = router;