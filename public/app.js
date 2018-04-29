console.log('start');

function nurseLogin() {
    $.ajax({
        url: '/api/login/nurse',
        method: 'post',
        data: {
            username: $('#username').val(),
            password: $('#password').val()
        },
        success: function (msg) {
            if (msg.status === 1) {
                alert('Success')
                location.href = '/nurse/patient-list'
            } else {
                alert(msg.msg)
            }
        },
        error: function (err) {
            alert('error')
        }
    })
}

function patientLogin() {
    $.ajax({
        url: '/api/login/patient',
        method: 'post',
        data: {
            patientid: $('#patientid').val(),
            password: $('#password').val()
        },
        success: function (msg) {
            if (msg.status ===1) {
                Cookies.set('patientid', msg.patientid);
                alert('Login success')
                location.href = '/patient/symptoms'
            } else {
                alert(msg.msg)
            }
        },
        error: function (err) {
            alert('error')
        }
    })
}

function updatePatientSymptoms() {
    $.ajax({
        url: '/api/patient/symptoms',
        method: 'post',
        data: {
            patientid: Cookies.get('patientid'),
            fever: $('#fever').prop('checked'),
            headache: $('#headache').prop('checked'),
            cough: $('#cough').prop('checked'),
            diarrhea: $('#diarrhea').prop('checked'),
            dizziness: $('#dizziness').prop('checked')
        },
        success: function (msg) {
            if (msg.status ===1) {
                alert('Success')
            } else {
                alert(msg.msg)
            }
        },
        error: function (err) {
            alert('error')
        }
    })
}

function patientRegister() {
    $.ajax({
        url: '/api/patient/register',
        method: 'post',
        data: {
            patientid: $('#patientid').val(),
            fullname: $('#fullname').val(),
            password: $('#password').val(),
            username: $('#username').val(),
        },
        success: function (msg) {
            if (msg.status ===1) {
                alert('Success')
            } else {
                alert('Failed')
            }
        },
        error: function () {
            alert('error')
        }
    })
}

function patientLogout()
{
    Cookies.remove('patientid');
    alert('Success')
    location.href = '/'
}

function patientSetSymptoms()
{
    $.ajax({
        url: '/api/patient/'+Cookies.get('patientid'),
        method: 'get',
        success: function (msg) {
            if (msg.status === 1) {
                $.each(msg.patient.symptoms[0], function (i, e) {
                    $('#'+i).prop('checked', e)
                })
            } else {
                alert('Patient info error.')
                location.href = '/login/patient'
            }
        },
        error: function (err) {
            alert(err)
        }
    })
}

function patientVitalSignUpdate() {
    $.ajax({
        url: '/api/nurse/patient-vitalsign',
        method: 'post',
        data: {
            patientid: $('#patientid').val(),
            bodytemperature: $('#bodytemperature').val(),
            heartrate: $('#heartrate').val(),
            bloodpresure: $('#bloodpresure').val(),
            respiratoryrate: $('#respiratoryrate').val(),
            headache: $('#headache').prop('checked')? 1:0,
        },
        success: function (msg) {
            if (msg.status ===1) {
                alert('Success')
            } else {
                alert('Failed')
            }
        },
        error: function () {
            alert('error')
        }
    })
}

function patientVitalSignShow(patientid) {
    $.ajax({
        url: '/api/patient/' + patientid,
        method: 'get',
        success: function (msg) {
            if (msg.status === 1) {
                $('#bodytemperature').val(msg.patient.vitalsigns[0].bodytemperature)
                $('#heartrate').val(msg.patient.vitalsigns[0].heartrate)
                $('#bloodpresure').val(msg.patient.vitalsigns[0].bloodpresure)
                $('#respiratoryrate').val(msg.patient.vitalsigns[0].respiratoryrate)
                $('#headache').prop('checked', msg.patient.vitalsigns[0].headache ? true : false)
            } else {
                alert('failed');
            }
        },
        error: function (err) {
            alert(err)
        }
    })
}

function patientListShow() {
    $.ajax({
        url: '/api/nurse/patient-list',
        method: 'get',
        success: function (msg) {
            if (msg) {
                $.each(msg, function(i, e) {
                    $('#patientlist').append(`<li class="list-group-item">Username: ${e.username} &nbsp;&nbsp; 
                            <a href="/nurse/patient-vital-sign/${e.patientid}" class="btn btn-success btn-sm">Vital Sign</a><br>
                            
                    </li>`)
                })
            }
        },
        error: function () {
            alert('error')
        }
    })
}

function authenticator() {
    var token = Cookies.get('token');
    if (token === undefined || token === null) {
        location.href = '/login/entry'
        return;
    }
    $('.wrapper').show();
}