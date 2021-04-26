const mongoose = require('mongoose')



//La conexion a la bd.
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('Conexion a la bd exitosa')
    } catch (error) {
        console.log(error)
        throw new Error('Error al contectarse a la base de datos')
    }
}
module.exports = {
    dbConnection
}