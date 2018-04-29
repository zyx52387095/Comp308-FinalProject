var express = require('express');
var router = express.Router();
const nurse = require("../models/nurse.model");

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

router.get('/nurse/patient-vital-sign/:patientid', function (req, res, next) {
    let patient = {}
    patient.patientid = req.params.patientid
    res.render('nurse/patient-vital-sign', {patient:patient})
});

router.get('/nurse/new', function (req, res, next) {
    nurse.findOne({username: 'Kate'}, function(err, obj) {
        if (err || obj == null) {
            let anurse = new nurse({username: 'Kate', password: '000000'});
            anurse.save();
            res.json(anurse)
        } else {
            res.json(obj)
        }
    });
});

router.get('/patient/symptoms',function(req,res,next){
    res.render('patient/symptoms');
})

router.get('/patient/register',function(req,res,next){
    res.render('patient/register');
})


router.get('/patient/symptoms/:id',function(req,res,next){
    let patient = {}
    patient.id = req.params.id
    res.render('patient/symptoms', {patient: patient})
})


module.exports = router;
