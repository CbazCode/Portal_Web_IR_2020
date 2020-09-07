const express = require('express');
const router = express.Router();
var Bing = require('node-bing-api')({ accKey: "842f394f231646f5870606f868d4440e" });
const { isLoggedIn } = require('../lib/auth');
const pool = require('../database');


router.get('/recomendaciones', (req,res) =>{
    Bing.news("Recomendaciones prevencion COVID-19", { count: 6 }, (error, resNews, body) => {
        
        res.render('links/recomendaciones', {recomendaciones: body.value})
        
    })
    
});


router.get('/noticias', (req,res) =>{
    Bing.news("noticias coronavirus peru español", { count: 12 }, (error, resNews, body) => {
        
        res.render('links/noticias', {noticias: body.value})
        
    })
});


router.get('/enfermo',isLoggedIn,(req,res)=>{
    res.render('links/enfermo');
})

router.get('/sano',isLoggedIn, (req,res)=>{
    res.render('links/sano');
})


module.exports = router;