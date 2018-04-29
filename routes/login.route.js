const express = require('express');
const router = express.Router();
const passport =require('passport');
const registerCntrl = require('../controllers/register.controller');

router.post('/register', registerCntrl.register );

// router.route('/login')
// .post('/patient',function(req,res,next){
//     //todo
// })
// .post('/nurse', function(req,res,next){
//     //todo
// });
router.post('/patient',function(req,res,next){
    //todo
})
router.post('/nurse', function(req,res,next){
    //todo
});


module.exports = router;

