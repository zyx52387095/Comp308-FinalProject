const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

var patientSchema = new Schema(
  {

    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
        type: String,
        required: true
      },
    patientid: {
      type: Number,
      required: true,
      unique: true
    },
    

    fullname: {
      type: String,
      required: true
    },
    symptoms: [{
        fever: Boolean,
        headache: Boolean,
        cough: Boolean,
        diarrhea: Boolean,
        dizziness: Boolean
    }],

    vitalsigns: [{
        bodytemperature: Number,
        heartrate: Number,
        bloodpresure: Number,
        headache: Number,
        respiratoryrate: Number
    }],




    provider: String,
    providerId: String,
    providerData: {}
  },
  {
    timestamps: true
  }
);

patientSchema.statics.register = function(user, cbfn) {
  user.password = doHash(user.password);
  user.save(cbfn);
};

patientSchema.statics.findbyname = function(name, cbfn) {
  usermodel.findOne({ username: name }, cbfn);
};

patientSchema.methods.checkPassword = function(password, cbfn) {
  if (this.password === doHash(password)) {
    cbfn(null, true);
  } else {
    cbfn(new Error("user nameor password does not match", false));
  }
};

function doHash(val) {
  // 10000 - iteration, 64-key length, then convert to base64
  return crypto.pbkdf2Sync(val, salt, 10000, 64, "sha512").toString("base64");
}

module.exports = mongoose.model("patient", patientSchema);
