//import modules
const { randomInt } = require('crypto');
const express = require ('express');
const path = require('path');

//create a router object
const router = express.Router();

//export our router
module.exports = router;

const correoa = "kathy.ramos17@tectijuana.edu.mx";
const passworda = "17211556";
const correod = "david.becerra@tectijuana.edu.mx";
const passwordD = "cruzAzul"

//route to HOME
 router.get('/', function(req, res){
     res.render('pages/home',);
 });

router.get('/login', function(req, res){
    res.render('pages/login');
});

router.get('/loginDocente', function(req, res){
    res.render('pages/loginDocente');
});

 router.get('/personales', function(req, res){
    res.render('pages/datosPersonales');
});

router.get('/academicos', function(req, res){
    res.render('pages/datosAcademicos');
});

router.get('/socioeconomicos', function(req, res){
    res.render('pages/datosSocioeconomicos');
});

router.get('/laborales', function(req, res){
    res.render('pages/datosLaborales');
});
router.get('/requisitos', function(req, res){
    res.render('pages/requisitos');
});

router.get('/solicitudes', function(req, res){
    res.render('pages/solicitudes');
});

router.get('/resul', function(req, res){
    res.render('pages/rsul');
});

/*
router.post('/loginAlumno', function(req, res){
    var correoEntrada = req.body.correoA;
    var passwordEntrada = req.body.passwordA;

    if (correoEntrada =! correoa){
            alert("¡Correo incorrecto!");
    }
    res.render('pages/datos');
});*/


