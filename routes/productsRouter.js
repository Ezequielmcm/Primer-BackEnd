const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const controlers = require('../controlers/productsControlers')
const validarProduct = require('../middlewares/validarProduct')
const validarProductPut = require('../middlewares/validarProductPut')

router.get ("/", controlers.getProducts)
router.get ("/buscar", controlers.getProductByName)
router.get ("/:id", controlers.getProductById)

router.post (
    "/agregar", validarProduct,
    [
        check("product").not().isEmpty().withMessage("El producto es obligatorio"),
        check("price").not().isEmpty().isNumeric().withMessage("El precio es obligatorio"),
        check("description").not().isEmpty().withMessage("La descripción es obligatoria"),
    ],
    controlers.postProduct)

router.put ("/actualizar/:id", validarProductPut,
    [
        check("product").not().isEmpty().withMessage("El producto es obligatorio"),
        check("price").not().isEmpty().isNumeric().withMessage("El precio es obligatorio"),
        check("description").not().isEmpty().withMessage("La descripción es obligatoria"),
    ],
    controlers.updateProduct)

router.delete ("/eliminar/:id", controlers.deleteProduct)

module.exports = router;