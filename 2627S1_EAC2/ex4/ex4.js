import { validarNomUsuari, validarEdat, validarCodiPromo } from './validador.js';



let submit = document.getElementById('btnEnviar');
let nomInput = document.querySelector('#nom');
let edatInput = document.querySelector('#edat');
let codiInput = document.querySelector('#codi');
let errorSpan = document.querySelectorAll('.error');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validarNomUsuari(nomInput) && validarEdat(edatInput) && validarCodiPromo(codiInput)){
        //si fós correcte faria el submit();
        alert(`Formulari a nom de ${nomInput.value} enviat.`);
    }
});

nomInput.addEventListener('input',()=>{
    if(!validarNomUsuari(nomInput.value)){
        errorSpan[0].textContent = "El nom d'usuari ha de tenir mínim 4 caracters";
        nomInput.classList.add('input-error');
    }else{
        errorSpan[0].textContent = "";
        nomInput.classList.remove('input-error');
    }
});

edatInput.addEventListener('blur',()=>{
    if(!validarEdat(parseFloat(edatInput.value))){
        addError(errorSpan[1], edatInput,"Has de ser major de 18 anys");
    }else{
        removeError(errorSpan[1], nomInput);
    }
});

codiInput.addEventListener('blur',()=>{
    if(!validarCodiPromo()){
        addError(errorSpan[2],codiInput,"El codi ha de ser de 4 caracters en majúscula i dos xifres");
    }else{
        removeError(errorSpan[2], codiInput);
    }
});

function addError(span, input, text){
    span.textContent = text;
    input.classList.add('input-error');
}

function removeError(span,input){
    span.textContent = "";
    input.classList.remove('input-error');
}