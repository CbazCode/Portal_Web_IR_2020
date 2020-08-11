const express = require('express');
const router = express.Router();
//var Bing = require('node-bing-api')({ accKey: "fa28a7d90bcb4ad7bb5b27e3bc85eee0" });
var Bing = require('node-bing-api')({ accKey: "842f394f231646f5870606f868d4440e" });

const pool = require('../database');


router.get('/recomendaciones', (req,res) =>{
    Bing.news("Recomendaciones prevencion COVID-19", { count: 6 }, (error, resNews, body) => {
        
        res.render('links/recomendaciones', {recomendaciones: body.value})
        
    })
    
});


router.get('/noticias', (req,res) =>{
    Bing.news("COVID-19 peru", { count: 12 }, (error, resNews, body) => {
        
        res.render('links/noticias', {noticias: body.value})
        
    })
});


router.get('/enfermo',(req,res)=>{
    res.send('enfermo');
})

router.get('/sano', (req,res)=>{
    res.send('sano');
})

//res.render('links/recomendaciones');
//res.render('links/noticias');





//await pool.query('?',parametros)
//Para que await funcione se debe poner async en el router.post('/fill', async (req,res) =>...)


/*
router.get('/random', (req,res) =>{
    res.redirect('http://google.com.pe');
});
*/

module.exports = router;