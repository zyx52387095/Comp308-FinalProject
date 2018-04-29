const router =  require('express').Router();
const patientCntrl = require('../controllers/patient.controller');

router.route('/home')
.post(patientCntrl.upsertSymptom)
.get(patientCntrl.listOfSymptoms);

// router.route('/:patientid')
// .post()
// .get();

module.exports = router;