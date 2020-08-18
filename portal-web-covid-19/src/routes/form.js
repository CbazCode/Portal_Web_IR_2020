const express = require('express');
const Swal = require('sweetalert2');
const router = express.Router();


const pool = require('../database');

router.get('/form',(req,res)=>{
    res.render('links/form');
})

router.post('/form',async(req,res)=>{
    const newTest = {
        idusuario: req.user.idusuario,
        preg1: parseInt(req.body.question1),    
        preg2: parseInt(req.body.question2),
        preg3: parseInt(req.body.question3),
        preg4: parseInt(req.body.question4),
        preg5: parseInt(req.body.question5),
        preg6: parseInt(req.body.question6),
        preg7: parseInt(req.body.question7),
        preg8: parseInt(req.body.question8),
        preg9: parseInt(req.body.question9),
        preg10: parseInt(req.body.question10),
        preg11: parseInt(req.body.question11),
        preg12: parseInt(req.body.question12),
        preg13: parseInt(req.body.question13),
        preg14: parseInt(req.body.question14),
        resultadoTest: parseInt(req.body.question1) + parseInt(req.body.question2)+parseInt(req.body.question3)+parseInt(req.body.question4)+parseInt(req.body.question5)+parseInt(req.body.question6)+parseInt(req.body.question7)+parseInt(req.body.question8)+parseInt(req.body.question9)+parseInt(req.body.question10)+parseInt(req.body.question11)+parseInt(req.body.question12)+parseInt(req.body.question13)+parseInt(req.body.question14),
    }
   // UTILIZAR PARA EL FOREIGN KEY 
   //console.log(req.user.idusuario);
    if(newTest.resultadoTest>9){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'sano',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'enfermo',
            showConfirmButton: false,
            timer: 1500
          })
    }
    //pool.query('INSERT INTO test_usuario SET ?',[newTest] );
   await pool.query('INSERT INTO test_usuario SET ?',[newTest] );
    
})

module.exports = router;