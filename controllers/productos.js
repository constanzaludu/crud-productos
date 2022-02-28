const Producto = require('../models/producto')


const productosGet = async (req, res) => {

    const { limite = 5, desde = 0 } = req.query

    const parametros = { estado: true }

    const producto = [total, usuarios] = await Promise.all([
        Producto.countDocuments(parametros),
        Producto.find(parametros)
        .skip(Number (desde))
        .limit(Number(limite))
    ])

    res.status(200).json({
        total,
        producto
    })
}
 
const productosPost  = async (req, res) => {

    const { nombre, estado, precio, descripcion } = req.body;

    const producto = new Producto({ nombre, estado, precio, descripcion })

    //guardar en la base de datos
    await producto.save()

    res.status(200).json(producto)
}

const productosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const producto = await Producto.findByIdAndUpdate( id , resto )

    res.status(200).json(producto)
}

const productosDelete  = async(req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByIdAndUpdate( id, { estado: false })

    res.status(200).json(producto)
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}