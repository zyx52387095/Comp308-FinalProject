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


router.post('/patient', function(req,res,next){
    patient.findOne({patientid: req.body.patientid}, function (err, obj) {
        if (err) {
            res.json({
                status: 0,
                msg: 'Failed'
            })
        } else {
            obj.checkPassword(req.body.password, function (err, status) {
                if (status === true) {
                    res.json({
                        status: 1,
                        patientid: obj.patientid
                    })
                } else {
                    res.json({
                        status: 0,
                        msg: 'Password Wrong.'
                    })
                }
            })
        }
    })
})
router.post('/nurse', function(req,res,next){
    //todo
});


module.exports = router;

