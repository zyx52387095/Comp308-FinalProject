const router =  require('express').Router();
const patientCntrl = require('../controllers/patient.controller');
const logincntrl = require('../controllers/register.controller')
const patient = require("../models/patient.model");

router.route('/home')
.post(patientCntrl.upsertSymptom)
.get(patientCntrl.listOfSymptoms);

router.get('/:patientid', function (req, res) {
    patient.findOne({patientid: req.params.patientid}, function (err, obj) {
        if (err) {
            res.json({
                status:0
            })
        } else {
            let msg = {}
            msg.status = 1
            msg.patient = obj
            res.json(msg)
        }
    })
})


router.post('/register',logincntrl.register);

router.post('/symptoms', function (req, res) {
    let symptoms = {}
    symptoms.fever = req.body.fever
    symptoms.headache = req.body.headache
    symptoms.cough = req.body.cough
    symptoms.diarrhea = req.body.diarrhea
    symptoms.dizziness = req.body.dizziness
    patient.update({patientid: req.body.patientid}, {symptoms: symptoms}, {upsert:true}, function (err, obj) {
        if (err) {
            res.json({
                status: 0,
                msg: err
            })
        } else {
            res.json({
                status: 1
            })
        }
    })
});

module.exports = router;