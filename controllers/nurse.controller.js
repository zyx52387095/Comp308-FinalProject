const nurse = require("../models/nurse.model");
const patient = require("../models/patient.model");

//find all info of one patient -nurse
const getPatient = function(req, res) {
  patientid = req.param.patientid;
  patientinfo.findOne(patientid, function(err, retobj) {
    sendResp(err, res, "Patient Found", retobj);
  });
};
//list all patients -nurse
const listOfPatients = function(req, res) {
  patient.find({}, function(err, retobj) {
    var patients = {};
    res.send(retobj);
  });
};

//insert vital signs - nurse
const insertVitalSign = function(req, res) {
  patientinfo.create(req.body, function(err, retobj) {
    //add only the vital signs
    //只添加体征数据
    retobj = retobj.vitalsigns;
    sendResp(err, res, "Vital signs added", retobj);
  });
};

function sendResp(err, res, message, retobj) {
  const ret = {};
  if (err) {
    ret.message = err.message;
    res.status(0).json(ret);
  } else {
    ret.message = message;
    ret.data = retobj;
    res.status(1).json(ret);
  }
}

module.exports = {
    "getPatient": getPatient,"listOfPatients": listOfPatients,"insertVitalSign": insertVitalSign
  };
