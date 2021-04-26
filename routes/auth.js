//Rutas de usuarios/Auth Siempre tratar de poner esto de los paths.
//host +/api/auth Para no perderme despues
//const express =require('express');
//const router = express.Router();seria lo mismo que lo de abajo


const {Router} =require('express');
const {check} = require('express-validator')

//la funcion para que no se me haga muy grande el codigo en los routers.
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//siempre se requiere una request y una response.
//esto eslo que retorna
//las funciones estan en controllers auth en este caso.
router.post(
    '/new',
    //middelwares
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        //en carpeta middleware
        validarCampos
    ],
    crearUsuario);
router.post(
    '/',
    [
    //middelwares
        check('email','El email es obligatorio').isEmail(),
        check('password','El password tiene que tener al menos 6 caracteres').isLength({min:6}),
        validarCampos
    ]
    ,loginUsuario);
//para renovar el token, si fuera uno o mas middlewares, el validarJWT iria entre []
router.get('/renew', validarJWT ,revalidarToken);


module.exports =router;