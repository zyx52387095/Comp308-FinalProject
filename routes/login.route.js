const express = require('express');
const router = express.Router();
const passport =require('passport');
const registerCntrl = require('../controllers/register.controller');
const patient = require("../models/patient.model");

router.post('/register', registerCntrl.register );

// router.route('/login')
// .post('/patient',function(req,res,next){
//     //todo
// })
// .post('/nurse', function(req,res,next){
//     //todo
// });


router.post('/patient',function(req,res,next){
    
    patient.findOne({patientid: req.params.patientid, password: patient.doHash(req.params.password)}, function () {
        
    })
})
router.post('/nurse', function(req,res,next){
    //todo
});


module.exports = router;

