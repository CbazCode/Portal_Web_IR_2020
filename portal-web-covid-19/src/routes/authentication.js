const express = require('express');
const router = express.Router();
const passport = require('passport');
//const { isLoggedIn } = require('../lib/auth');

router.get('/inicio-de-sesion', (req,res) =>{
    res.render('auth/signIn');
});

router.post('/inicio-de-sesion',(req,res,next) =>{
    passport.authenticate('local.signin',{
        successRedirect:'/profile',
        failureRedirect:'/inicio-de-sesion'
        //failureFlash:true
    })(req,res,next);
});

router.get('/registrarse', (req,res) =>{
    res.render('auth/signUp');
});
router.post('/registrarse', passport.authenticate('local.signup',{
        successRedirect:'/profile',
        failureRedirect:'/registrarse'
        //failureFlash:true
}));

router.get('/profile',(req,res)=>{
    res.send('Esto es el profile')
});

module.exports = router;  