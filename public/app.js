console.log('start');

function nurseLogin() {
    $.ajax({
        url: '/login/nurse',
        method: 'post',
        data: {
            username: $('#username').val(),
            password: $('#password').val()
        },
        success: function (msg) {
            console.log(123 )
        },
        error: function (err) {
            alert('error')
        }
    })
}

function patientLogin() {
    $.ajax({
        url: '/login/patient',
        method: 'post',
        data: {
            username: $('#patientid').val(),
            password: $('#password').val()
        },
        success: function (msg) {
            console.log(123 )
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
            patientid: $('#patientid').val(),
            fever: $('#fever').val(),
            headache: $('#headache').val(),
            cough: $('#cough').val(),
            diarrhea: $('#diarrhea').val(),
            dizziness: $('#dizziness').val()
        },
        success: function (msg) {
            console.log(123 )
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

function patientVitalSignUpdate() {
    $.ajax({
        url: '/api/patient-vitalsign',
        method: 'post',
        data: {
            patientid: $('#patientid').val(),
            bodytemperature: $('#bodytemperature').val(),
            heartrate: $('#heartrate').val(),
            bloodpresure: $('#bloodpresure').val(),
            respiratoryrate: $('#respiratoryrate').val(),
            headache: $('#headache').val(),
        },
        success: function (msg) {

        },
        error: function () {
            alert('error')
        }
    })
}

function getPatientList() {
    $.ajax({
        url: '/api/patient-list',
        method: 'get',
        success: function (msg) {
            if (msg.msg === 1) {
                msg.patients.each(function (i, e) {
                    console.log(i)
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