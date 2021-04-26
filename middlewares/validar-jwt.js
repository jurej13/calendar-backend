
const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req,res=response,next) => {
    //x-token puesto en el header del postman
    const token = req.header('x-token');
    //controlando si el token tiene valor o no.
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'no hay token en la peticion'
        })
    }
    try {
        //desestructurando el payload
        const {uid,name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        req.uid = uid
        req.name = name
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'Token no valido'
        })
    }


    next();
}


module.exports = {
    validarJWT
}



