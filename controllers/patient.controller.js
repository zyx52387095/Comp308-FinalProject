const patientinfo = require("../models/patient.model");


//list all symptoms - patient
const listOfSymptoms = function(req, res) {
  patientid = req.param.patientid;
  patientinfo.findOne(patientid, function(err, retobj) {
    if (retobj) {
      retobj = retobj.symptoms;
    }
    sendResp(err, res, "Select symptoms", retobj);
  });
};

//insert or update symptoms - patient
const upsertSymptom = function(req, res) {
  //todo
  patientinfo.upsert();
};

//replaced by upsertvitalsign & upsertSymptom
//const update = function(req, res){}

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
  "listOfSymptoms": listOfSymptoms,"upsertSymptom": upsertSymptom
};
