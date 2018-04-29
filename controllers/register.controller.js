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
        res.status(0).json({
            message:err.message,
            obj: null,
            //token: null
        });
    }else {
        res.status(1).json({
            message: "patient registered",
            obj:patient
        })
    }
})
};

module.exports = {register: register }