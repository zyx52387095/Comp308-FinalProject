const router =  require('express').Router();
const patientCntrl = require('../controllers/patient.controller');

router.route('/home')
.post(patientCntrl.upsertSymptom)
.get(patientCntrl.listOfSymptoms);

// router.route('/:patientid')
// .post()
// .get();

router.get('/register',function(req,res,next){
    res.render('patient/register');
})

router.post('/register',function(req,res,next){

})

router.get('/symptoms/:id',function(req,res,next){
    let patient = {}
    patient.id = req.params.id
    res.render('patient/symptoms', {patient: patient})
})

module.exports = router;