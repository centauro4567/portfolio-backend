const express = require('express');
const router = express.Router();

const proyectCtrl = require('../controllers/proyect.controller')


router.get("", proyectCtrl.getProyects);

router.get("/:id", proyectCtrl.getProyect);

router.post("", proyectCtrl.createProyect);

router.delete("/:id", proyectCtrl.deleteProyect);

router.put("/:id", proyectCtrl.editProyect);


module.exports = router;