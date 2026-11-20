let finestres = document.getElementsByClassName('window');
let body = document.querySelector('body');
let lantern = document.getElementById('lantern-row');
let manteniment = false;


for(let finestra of finestres){
    finestra.addEventListener('mouseenter',() => {
        if(!manteniment){
            finestra.classList.add('lit');
        }
    });
    finestra.addEventListener('mouseleave',() => {
        finestra.classList.remove('lit')});
}



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
        }else if(document.querySelectorAll('.night-mode') > 0){
            let avis = document.createElement('div');
            avis.setAttribute('avis');
            avis.textContent = 'Encara no és de nit! No puc obrir els llums del far...';
            avis.style.position = 'fixed';
            avis.style.top = '30px';
            avis.style.color = '#00ff00';
            avis.style.backgroundColor = '#0000';
            avis.style.border = '2px solid #00ff00';
            body.append(avis);
            
        }else{
            let nouDiv = document.createElement('div');
            nouDiv.classList.add('pixel','beam'); 
            lantern.append(nouDiv.cloneNode());
            lantern.prepend(nouDiv);
            console.log('llums enceses');
        }
        document.addEventListener('keydown', eliminarAvis, { once: true });
        document.addEventListener('mousemove', eliminarAvis, { once: true });
    }

function eliminarAvis(){
    let avis = document.querySelector('avis');
    if(avis){
        remove(avis);
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
    

