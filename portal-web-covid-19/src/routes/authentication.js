const express = require('express');
const router = express.Router();

router.get('/inicio-de-sesion', (req,res) =>{
    res.render('auth/signIn');
});
router.get('/registrarse', (req,res) =>{
    res.render('auth/signUp');
});

module.exports = router;  