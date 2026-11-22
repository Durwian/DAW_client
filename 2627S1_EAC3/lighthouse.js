let finestres = document.querySelectorAll('.window');
let body = document.body;
let lantern = document.getElementById('lantern-row');
let cupula = document.getElementById('cupola-group');
let manteniment = false;

cupula.addEventListener('mouseenter', () =>{
    if(!manteniment){
        finestres.forEach(finestra => {
            finestra.classList.add('lit');});
    }
});

cupula.addEventListener('mouseleave', () => {
    finestres.forEach(finestra => {
        finestra.classList.remove('lit');});
});

for(let finestra of finestres){
    finestra.addEventListener('mouseenter',() => {
        if(!manteniment){
            finestra.classList.add('lit');
        }
    });
    finestra.addEventListener('mouseleave',() => {
        finestra.classList.remove('lit')});
};



function modeNit(){
    body.classList.toggle('night-mode');
}

function obrirLlums(){
        let focus = document.querySelectorAll('.beam');
        if(focus.length > 0){
            for(let elem of focus){
                elem.remove();
            }
            console.log('llums apagades');
        }else if(!body.classList.contains('night-mode')){
            let avis = document.createElement('div');
            avis.classList.add('avis');
            avis.textContent = 'Encara no és de nit! No puc obrir els llums del far...';
            avis.style.position = 'fixed';
            avis.style.top = '150px';
            avis.style.color = '#00ff00';
            avis.style.background = '#000000';
            avis.style.border = '2px solid #00ff00';
            body.append(avis);
            document.addEventListener('keyup', () =>
                setTimeout(eliminarAvis,5000), { once: true });
            document.addEventListener('mousemove', eliminarAvis, { once: true });
        }else{
            let nouDiv = document.createElement('div');
            nouDiv.classList.add('pixel','beam'); 
            lantern.append(nouDiv.cloneNode());
            lantern.prepend(nouDiv);
            console.log('llums enceses');
        }
        
    }

function eliminarAvis(){
    let avis = document.querySelector('.avis');
    if(avis){
      avis.remove();
    }
}

body.addEventListener('keydown', function(e) {
    
    if( e.key.toLowerCase() === 'n'){
        if(manteniment){return;}
        modeNit();
    }
    if( e.key.toLowerCase() === 'l'){
        if(manteniment){return;}
        obrirLlums();
    }

    if(e.key.toLowerCase() === 'g'){
        if(manteniment){
            manteniment = false;
            console.log('manteniment desactivat');
        }else{
            manteniment = true;
            console.log('manteniment activat');
        }
    }
});
    

