const { Schema, model } = require('mongoose')

const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    precio: {
        type: Number,
        default: 0
    },
    descripcion: {
        type: String
    }

})

ProductoSchema.methods.toJSON = function() {
    
    const { _id, ...producto } = this.toObject();
    producto._id = _id

    return producto
}

module.exports = model('Producto', ProductoSchema)