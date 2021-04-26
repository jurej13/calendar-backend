const {Schema,model} = require('mongoose');

const UsuarioSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

//el model es para exportar el Schema, 'Usuario' => es el nombre
module.exports = model('Usuario',UsuarioSchema)