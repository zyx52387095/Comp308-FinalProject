var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/login/entry', function(req,res,next){
    res.render('login/entry');
});
router.get('/login/patient',function(req,res,next){
    res.render('login/patient');
})
router.get('/login/nurse', function(req,res,next){
    res.render('login/nurse');
});

router.get('/nurse/patient-list', function (req, res, next) {
    res.render('nurse/patient-list')
});

router.get('/nurse/patient-vital-sign/:id', function (req, res, next) {
    let patient = {}
    patient.id = req.params.id
    res.render('nurse/patient-vital-sign', {patient:patient})
});

router.get('/patient/register',function(req,res,next){
    res.render('patient/register');
})


router.get('/patient/symptoms/:id',function(req,res,next){
    let patient = {}
    patient.id = req.params.id
    res.render('patient/symptoms', {patient: patient})
})


module.exports = router;
