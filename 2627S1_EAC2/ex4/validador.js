export {validarNomUsuari, validarEdat, validarCodiPromo};

function validarNomUsuari(text) {
    return text.trim().length >= 4;
}

function validarEdat(edat){
    return edat >= 18;
}

function validarCodiPromo(codi){
    let regex = /^[A-Z]{4}\d{2}$/;
    return regex.test(codi);
}