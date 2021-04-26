//no trabaja con promesas, siempre con callbacks
const jwt = require('jsonwebtoken');

const generarJWT = (uid,name) => {
    // como no trabaja con promesas genero una
    return new Promise( (resolve,reject) => {
        const payload = {uid,name};
        //generar el token
        //recibe 4 argumentos, el peyload donde van los datos.
        //la palabra secreta, tiene que ser algo dificil siempreque seria el process.env.Secret..
        //tercer argumento es la duracion del mismo, en este caso dos horas.
        //4 argumento una funcion de callback que te dice si hubo un error o se resolvio la creacion del tk
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        },(err,token)=>{
            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })
}
module.exports = {
    generarJWT
}