const express = require('express');
const router = express.Router();


const pool = require('../database');


router.get('/recomendaciones', (req,res) =>{
    res.render('links/recomendaciones');
});
router.get('/noticias', (req,res) =>{
    res.render('links/noticias');
});








//await pool.query('?',parametros)
//Para que await funcione se debe poner async en el router.post('/fill', async (req,res) =>...)


/*
router.get('/random', (req,res) =>{
    res.redirect('http://google.com.pe');
});
*/

module.exports = router;