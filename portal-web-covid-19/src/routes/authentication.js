const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn,isNotLoggedIn } = require('../lib/auth');

router.get('/inicio-de-sesion',isNotLoggedIn, (req,res) =>{
    res.render('auth/signIn');
});

router.post('/inicio-de-sesion',isNotLoggedIn,(req,res,next) =>{
    //req.app.locals.objeto = 'test';
    passport.authenticate('local.signin',{
        successRedirect:'/perfil',
        failureRedirect:'/inicio-de-sesion',
        failureFlash:true
    })(req,res,next);
    

});

router.get('/registrarse',isNotLoggedIn, (req,res) =>{
    res.render('auth/signUp');
});

router.post('/registrarse',isNotLoggedIn, passport.authenticate('local.signup',{
        successRedirect:'/form',
        failureRedirect:'/registrarse',
        failureFlash:true
}));

router.get('/perfil',isLoggedIn ,(req,res)=>{
    /*cambiar perfil por profile */
    res.render('profile');
});

router.get('/cerrar-sesion',(req,res)=>{
    req.logOut();
    res.redirect('/inicio-de-sesion');
});


module.exports = router;  