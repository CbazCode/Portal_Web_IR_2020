const express = require('express');
const router = express.Router();
const passport = require('passport');
//const { isLoggedIn } = require('../lib/auth');

router.get('/inicio-de-sesion', (req,res) =>{
    res.render('auth/signIn');
});
router.get('/registrarse', (req,res) =>{
    res.render('auth/signUp');
});
router.post('/registrarse',(req,res)=>{
    passport.authenticate('local.signup', {
        successRedirect: '/',
        failureRedirect: '/registrarse',
        failureFlash: true
    });
});



module.exports = router;  