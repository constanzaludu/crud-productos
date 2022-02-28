const  { Router } = require('express');
const { productosGet, productosPost, productosPut, productosDelete} = require('../controllers/productos');
const { check } = require('express-validator');

const router = Router();

//Aca vamos a ir poniendo todas las rutas de mi API referido a lo de productos
router.get('/', productosGet);

router.post('/', [
    check('nombre', "El nombre es obligatorio")]
    , productosPost);

router.put('/:id', productosPut);

router.delete('/:id', productosDelete);

module.exports = router