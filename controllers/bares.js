const db = require('../models/db');


function getBares(req, res){
    res.json(db.bares.find())
}

function getBar(req, res){
    let id=req.params.id;
    let respuesta=db.bares.find({id:id});
    res.json(respuesta);

}

function addBar(req, res){
    const ej=req.body;
    let solucion=db.bares.save(ej);
    res.json(solucion);
}

function deleteBar(req, res){
    let id=req.params.id;
    db.bares.remove({ id: id }); 
    res.json(db.bares.find());

}

function editBar(req, res){
    let idNuevo=req.params.id;
    let cuerpo=req.body;
   db.bares.update({id:idNuevo},cuerpo);
   res.json(db.bares.find());
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar}