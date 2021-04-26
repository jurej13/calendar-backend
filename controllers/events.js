const {response} = require('express')
const Evento=require('../models/evento')

const getEventos= async(req,res) => {

    const eventos = await Evento.find()
                                //el populate es para que me de los datos que quiero
                                //en este caso del usuario.
                                .populate('user','name');

    res.json({
        ok:true,
        eventos
    });

}

const crearEvento = async(req,res) => {
    const evento = new Evento( req.body );
    try {
        evento.user = req.uid;
        const eventoGuardado=await evento.save()
        res.json({
            ok:true,
            evento:eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
    res.json({
        ok:true,
        msg:'crearEvento'
    })
}

const actualizarEvento = async(req,res) => {

    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        const evento = await Evento.findById(eventoId)
        if( !evento){
            return res.status(404).json({
                ok:false,
                msg:'Evento no existe por ese id'
            })
        }
        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            })
        }
        //agarro los datos que manda y le agrego el id, por lo que el usuario no manda el id
        const nuevoEvento = {
            ...req.body,
            user: uid
        }
        //el new:true del final es para que me devuelva el valor actualizado.
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento,{new:true});
        res.json({
            ok:true,
            evento:eventoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

}

const eliminarEvento =async (req,res) => {
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        const evento = await Evento.findById(eventoId)
        if( !evento){
            res.status(404).json({
                ok:false,
                msg:'Evento no existe por ese id'
            })
        }
        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            })
        }
        
        await Evento.findByIdAndDelete(eventoId);
        res.json({
            ok:true
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    res.json({
        ok:true,
        msg: 'eliminarEvento'
    })
}
module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}