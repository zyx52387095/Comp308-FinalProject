const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

var nurseSchema = new Schema(
    {
        username: {
            type: String,
            unique:true,
            required: true
        },
        password: {
            type: String,
            required: true,

        },

        provider: String,
        providerId: String,
        providerData: {}
     },
    {
        timestamps: true
    });
    
    // patientSchema.statics.register = function (user, nurse) {
    //     user.password = doHash(user.password);
    //     user.save(nurse);
    // }
    
    patientSchema.statics.findbyname = function(name, nurse){
        usermodel.findOne({username:name},nurse);
    }
    
    
    patientSchema.methods.checkPassword = function (password, nurse) {
        if (this.password === doHash(password)) {
            nurse(null, true);
        } else {
            nurse(new Error('user nameor password does not match', false));
        }
    }
       
    function doHash(val) {
        // 10000 - iteration, 64-key length, then convert to base64
        return crypto.pbkdf2Sync(val, salt, 10000, 64, 'sha512').toString('base64');
    }

module.exports = mongoose.model("nurse", nurseSchema);