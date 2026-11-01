export {celsiusAFarenheit, farenheitACelicius}

export default function formatarResultat(valor, unitat){
    return `${valor}${unitat}`;
}

function celsiusAFarenheit(celcius) {
    return celcius * 1.8 + 32;
}

function farenheitACelicius(farenheit){
    return (farenheit - 32) / 1.8 ;
}