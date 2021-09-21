const proyectCtrl = {};
const proyect = require('../models/proyecto');
const cloudinary = require('../cloudinary')
const fs = require('fs');


proyectCtrl.getProyects = async (req, res) => {
    
    try{
        const proyects = await proyect.find()
        res.json(proyects)
    }
    catch (err){
        console.log(err);
    }
    
}

proyectCtrl.getProyect = async (req, res) => {

    try{
        const proyectFound = await proyect.findById(req.params.id)
        res.json(proyectFound)
    }
    catch(err){
        console.log(err)
    }
    
}

proyectCtrl.createProyect = async (req, res) => {
    try{

        const result = await cloudinary.uploader.upload(req.file.path)

        const newProyect = new proyect(req.body);
        newProyect.imgPath = result.secure_url
        newProyect.imgId = result.public_id
    
    await newProyect.save();
    res.json(newProyect);

    }
    catch (err){
        console.log(err);
    }
}

proyectCtrl.deleteProyect = async (req, res)=> {

    try{

        const proyectDeleted = await proyect.findById(req.params.id)
        await cloudinary.uploader.destroy(proyectDeleted.imgId)
        await proyectDeleted.remove();

        res.json(proyectDeleted)

    }
    catch(err){
        console.log(err);
    }
    
}

proyectCtrl.editProyect = async (req, res)=>{

    try{

        const proyectFound = await proyect.findById(req.params.id);
        await cloudinary.uploader.destroy(proyectFound.imgId);
    
        const result = await cloudinary.uploader.upload(req.file.path)
        const { id } = req.params
        const editedProyect = {
        name: req.body.name,
        description: req.body.description,
        langs: req.body.langs,
        imgPath: result.secure_url,
        imgId: result.public_id
    }

    await proyect.findByIdAndUpdate(id, {$set: editedProyect}, {new: true})
    res.json(editedProyect)

    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = proyectCtrl;