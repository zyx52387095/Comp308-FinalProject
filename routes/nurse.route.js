const router =  require('express').Router();
const nurseCntrl = require('../controllers/nurse.controller');

// router.route('/patient-list')
// .post(nurseCntrl.insertVitalSign)
// .get(nurseCntrl.listOfPatients);

router.route('/patientinfo/:patientid')
.post()
.get(nurseCntrl.getPatient);

router.get('/patient-list', function (req, res, next) {
    res.render('nurse/patient-list')
});

router.get('/patient-vital-sign/:id', function (req, res, next) {
    let patient = {}
    patient.id = req.params.id
    res.render('nurse/patient-vital-sign', {patient:patient})
});

module.exports = router;