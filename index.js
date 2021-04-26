
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();



//Crear el servidor de express
const app = express();


//Conextion to database
dbConnection();

//CORS
app.use(cors())


//Directorio Publico
//el use en express es conocido como un middleware,
//el middleware se ejecuta siempre que pasa por algun lugar
app.use(express.static('public'));

//LECTURA Y PARSEO DEL BODY,middleware
app.use(express.json());//las peticiones que vengan en formato json se procesan aca y se extrae su contenido


//RUTAS
app.use('/api/auth',require('./routes/auth'))
app.use('/api/events',require('./routes/events'))
//TODO:crud:eventos


//Escuchar peticiones
//primer argumento del app.listen es el puerto, no usar el 3000
//quedaria app.listen(puerto,()=>{})
//el process.env, me da la info de todas las variables de entorno
//entonces puedo agarrar facilmente el PORT de la carpeta .env para usarlo.npm i dotenv
app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
})