const {Schema,model} = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes:{
        type: String
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        //Esto le dice a moongose que va a ser una referencia
        type: Schema.Types.ObjectId,
        //aca explicamos la referencia
        ref: 'Usuario',
        required:true
    }
})
//reescribir el Schema para que guarde solo los datos que guarde , osea que no ponga _V y _ID
EventoSchema.method('toJSON',function(){
    const {__v,_id,...object} = this.toObject();
    //para poner el id como id y no como _id
    object.id= _id;
    return object;
})
//el model es para exportar el Schema, 'Usuario' => es el nombre
module.exports = model('Evento',EventoSchema)