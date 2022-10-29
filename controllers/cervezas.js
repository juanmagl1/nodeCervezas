const db = require('../models/db');


function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    let id=req.params.id;
    let respuesta=db.cervezas.find({id:id});
    res.json(respuesta);

}

function addBeer(req, res){
    const ej=req.body;
    let solucion=db.cervezas.save(ej);
    //Con el res.json enseñamos la cerveza que hemos creado
    res.json(solucion);
}

function deleteBeer(req, res){
    let id=req.params.id;
    db.cervezas.remove({ id: id }); 
    res.json(db.cervezas.find());

}

function editBeer(req, res){
    let idNuevo=req.params.id;
    let cuerpo=req.body;
   db.cervezas.update({id:idNuevo},cuerpo);
   res.json(db.cervezas.find());
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}