import { validarNomUsuari, validarEdat, validarCodiPromo } from './validador.js';


let form = document.querySelector('form');
let submit = document.getElementById('btnEnviar');

//llibreria dels elements
const camps = [
    {
        input: document.querySelector('#nom'),
        error: document.querySelector('#nom').nextElementSibling,
        validar: (valor) => validarNomUsuari(valor),
        missatge: "El nom d'usuari ha de tenir mínim 4 caràcters"
    },
    {
        input: document.querySelector('#edat'),
        error: document.querySelector('#edat').nextElementSibling,
        validar: (valor) => valor.trim() !== '' && validarEdat(Number(valor)),
        missatge: "Has de ser major o igual a 18 anys"
    },
    {
        input: document.querySelector('#codi'),
        error: document.querySelector('#codi').nextElementSibling,
        validar: (valor) => validarCodiPromo(valor),
        missatge: "El codi ha de tenir 4 lletres majúscules i 3 xifres"
    }
];



//validació
function validarCamp(camp) {
    let valor = camp.input.value;

     
    if (!camp.validar(valor)) {
        addError(camp.error, camp.input, camp.missatge);
        return false;
    }

    removeError(camp.error, camp.input);
    return true;
}

let formulariValid = () => {
    let valid = true;

    camps.forEach((camp) => {
        if (!validarCamp(camp)) {
            valid = false;
        }
    });

    return valid;
};

//apliquem addEVEntListener a inputs i botó
camps.forEach((camp) => {
    camp.input.addEventListener('blur', () => {
        validarCamp(camp);
    camp.input.addEventListener('input', () =>{
        validarCamp(camp);
    })
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formulariValid()) {
        alert(`Formulari a nom de ${camps[0].input.value} enviat.`);
    };
});
    
//funcions per mostrar i treure errors, per no repetir codi
function addError(span, input, text){
    span.textContent = text;
    input.classList.add('input-error');
}

function removeError(span,input){
    span.textContent = "";
    input.classList.remove('input-error');
}



