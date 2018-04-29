const patient = require("../models/patient.model");

const register = function(req, res) {
    var newPatient = new patient({
        username: req.body.username,
        password: req.body.password,
        patientid: req.body.patientid,
        fullname: req.body.fullname
    });


patient.register(newPatient, function(err,patient){
    if(err){
        res.json({
            status: 0,
            obj: null
            //token: null
        });
    }else {
        res.json({
            status: 1,
            obj:patient
        })
    }
})
};

module.exports = {register: register }