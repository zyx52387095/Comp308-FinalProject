const router =  require('express').Router();
const nurseCntrl = require('../controllers/nurse.controller');
const patient = require("../models/patient.model");

router.route('/patient-list')
.post(nurseCntrl.insertVitalSign)
.get(nurseCntrl.listOfPatients);

router.route('/patientinfo/:patientid')
.post()
.get(nurseCntrl.getPatient);

router.post('/patient-vitalsign', function (req, res) {
    let vs = {}
    vs.bodytemperature = req.body.bodytemperature
    vs.heartrate = req.body.heartrate
    vs.bloodpresure = req.body.bloodpresure
    vs.respiratoryrate = req.body.respiratoryrate
    vs.headache = req.body.headache
    patient.update({patientid: req.body.patientid}, {vitalsigns: vs}, {}, function (err, obj) {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            res.json({
                status: 1
            })
        }
    })
})

module.exports = router;