const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/form',(req,res)=>{
    res.render('links/form');
})

router.post('/form',(req,res)=>{
    const newTest = {
        fecha:"",
        question1: parseInt(req.body.question1),    
        question2: parseInt(req.body.question2),
        question3: parseInt(req.body.question3),
        question4: parseInt(req.body.question4),
        question5: parseInt(req.body.question5),
        question6: parseInt(req.body.question6),
        question7: parseInt(req.body.question7),
        question8: parseInt(req.body.question8),
        question9: parseInt(req.body.question9),
        question10: parseInt(req.body.question10),
        question11: parseInt(req.body.question11),
        question12: parseInt(req.body.question12),
        question13: parseInt(req.body.question13),
        question14: parseInt(req.body.question14),
        resultado: 4,
        cambioDiario:5
    }
    console.log(newTest);
    res.send('recibido yeh');
})

module.exports = router;