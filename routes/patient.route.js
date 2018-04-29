const router =  require('express').Router();
const patientCntrl = require('../controllers/patient.controller');
const logincntrl = require('../controllers/register.controller')

router.route('/home')
.post(patientCntrl.upsertSymptom)
.get(patientCntrl.listOfSymptoms);

router.route('/:patientid')
.post()
.get();


router.post('/register',logincntrl.register);

module.exports = router;