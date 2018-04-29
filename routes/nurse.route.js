const router =  require('express').Router();
const nurseCntrl = require('../controllers/nurse.controller');

router.route('/patient-list')
.post(nurseCntrl.insertVitalSign)
.get(nurseCntrl.listOfPatients);

router.route('/patientinfo/:patientid')
.post()
.get(nurseCntrl.getPatient);

module.exports = router;