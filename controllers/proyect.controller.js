const proyectCtrl = {};
const proyect = require('../models/proyecto');
const fs = require('fs');


proyectCtrl.getProyects = async (req, res) => {
    const proyects = await proyect.find()
    res.json(proyects)
}

proyectCtrl.getProyect = async (req, res) => {
    const proyectFound = await proyect.findById(req.params.id)
    res.json(proyectFound)
}

proyectCtrl.createProyect = async (req, res) => {
    const newProyect = new proyect(req.body);
    newProyect.imgPath = req.file.path
    await newProyect.save();
    res.json(newProyect);
}

proyectCtrl.deleteProyect = async (req, res)=> {
    const proyectDeleted = await proyect.findByIdAndDelete(req.params.id)
    fs.unlink(proyectDeleted.imgPath, (err)=>{console.log(err)})
    res.json(proyectDeleted)
}

proyectCtrl.editProyect = async (req, res)=>{
    const { id } = req.params
    const editedProyect = {
        name: req.body.name,
        description: req.body.description,
        langs: req.body.langs,
        imgPath: req.file.path
    }
    await proyect.findByIdAndUpdate(id, {$set: editedProyect}, {new: true})
    res.json(editedProyect)
}

module.exports = proyectCtrl;