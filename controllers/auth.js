//esto es para poder tener el tipado inteligente,desestructuro la response
const {response} = require('express')
//bcryptjs es el npm i para tener el paquete para poder encriptar
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

//el req es lo que la persona solicita, el res es lo que nosotros respondemos
//si en algun momento no entiendo hacer un clg(req) estan todos los datos ahi
//mandar la info por el postman en body raw json
const crearUsuario = async (req,res=response)=>{
    // const {name,email,password} = req.body
    //Siempre validar la info en el frontend y en el backend
    //Comento este If porque voy a usar el npm i express-validator
    // if(name.length < 5){
    //     return res.status(400).json({
    //         ok:false,
    //         msg: 'El nombre tiene que tener 5 letras.'
    //     })
    // }

    const {email,password} = req.body;
    try {

        let usuario= await Usuario.findOne({email});
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg:'Ya existe un usuario con ese correo'
            })
        }
        usuario = new Usuario(req.body);
        //Encriptar Contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);

        await usuario.save();
        //Generar Json web Token,devuelve una promesa
        const token = await generarJWT(usuario.id,usuario.name)

        //Salio todo very good
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })        
    }
}

const loginUsuario= async (req,res=response)=>{
    const {email,password} = req.body;

    try {
        const usuario= await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg:'El usuario no existe con ese mail'
            })
        }      
        //Confirmar los password
        const validPassword = bcrypt.compareSync(password,usuario.password)  
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }
        //Generar JWT
        const token = await generarJWT(usuario.id,usuario.name)

        
        
        //Salio todo very good
        res.json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })



    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })     
    }
}
const revalidarToken = async (req,res = response) => {

    const {uid, name}= req;

    //renovar JWT
    const token = await generarJWT(uid,name)

    res.json({
        ok: true,
        token
    })
}
    


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}