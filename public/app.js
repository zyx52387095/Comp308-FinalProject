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

function authenticator() {
    var token = Cookies.get('token');
    if (token === undefined || token === null) {
        location.href = '/login/entry'
        return;
    }
    $('.wrapper').show();
}