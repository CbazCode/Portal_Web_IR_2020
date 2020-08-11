document.getElementById("formularioCovid").addEventListener("submit", function(event){
    let hasError = false;

    // obtenemos todos los input radio del grupo horario que esten chequeados
    // si no hay ninguno lanzamos alerta
    if(!document.querySelector('input[name="question1"]:checked') ||
    !document.querySelector('input[name="question2"]:checked') ||
    !document.querySelector('input[name="question3"]:checked') ||
    !document.querySelector('input[name="question4"]:checked') ||
    !document.querySelector('input[name="question5"]:checked') ||
    !document.querySelector('input[name="question6"]:checked') ||
    !document.querySelector('input[name="question7"]:checked') ||
    !document.querySelector('input[name="question8"]:checked') ||
    !document.querySelector('input[name="question9"]:checked') ||
    !document.querySelector('input[name="question10"]:checked') ||
    !document.querySelector('input[name="question11"]:checked') ||
    !document.querySelector('input[name="question12"]:checked') ||
    !document.querySelector('input[name="question13"]:checked') ||
    !document.querySelector('input[name="question14"]:checked') ) {
        alert('Error, faltan responder algunas pregntas');
        hasError = true;
    }
    
    // si hay algún error no efectuamos la acción submit del form
    if(hasError) event.preventDefault();
});