 import formatarResultat, { celsiusAFarenheit,farenheitACelicius } from "./conversions.js";

let buttonCel = document.getElementById('btnCelcius');
let buttonFar = document.getElementById('btnFarenheit');
let nombre = document.getElementById('numero');
let resultat = document.getElementById('resultat');

buttonCel.addEventListener('click', () =>{
    resultat.value = formatarResultat(
        farenheitACelicius(Number(nombre.value)), 'ºC');
});

buttonFar.addEventListener('click', () => {
    resultat.value = formatarResultat(
        celsiusAFarenheit(Number(nombre.value)), 'ºF');
});
