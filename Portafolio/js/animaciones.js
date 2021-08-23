let entradaIzquierda = document.querySelectorAll(".entradaIzquierda");

function mostrarScrollIzquierda(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < entradaIzquierda.length; i++ ){
        let alturaAnimado = entradaIzquierda[i].offsetTop;
        if(alturaAnimado - 900 < scrollTop){
            entradaIzquierda[i].style.opacity = 1;
            entradaIzquierda[i].classList.add("mostrarIzquierda");
        }
    } 
}

let entradaDerecha = document.querySelectorAll(".entradaDerecha");

function mostrarScrollDerecha(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < entradaDerecha.length; i++ ){
        let alturaAnimado = entradaDerecha[i].offsetTop;
        if(alturaAnimado - 900 < scrollTop){
            entradaDerecha[i].style.opacity = 1;
            entradaDerecha[i].classList.add("mostrarDerecha");
        }
    } 
}

let entradaArriba = document.querySelectorAll(".entradaArriba");

function mostrarScrollArriba(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < entradaArriba.length; i++ ){
        let alturaAnimado = entradaArriba[i].offsetTop;
        if(alturaAnimado - 900 < scrollTop){
            entradaArriba[i].style.opacity = 1;
            entradaArriba[i].classList.add("mostrarArriba");
        }
    } 
}


window.addEventListener('scroll', mostrarScrollIzquierda);
window.addEventListener('scroll', mostrarScrollDerecha);
window.addEventListener('scroll', mostrarScrollArriba);


let item1 = document.getElementById('portafolio-imagenes-item-1')
let item2 = document.getElementById('portafolio-imagenes-item-2')
let item3 = document.getElementById('portafolio-imagenes-item-3')
let item4 = document.getElementById('portafolio-imagenes-item-4')

const reDirectPortafolio = (url) => {
    window.open(url, '_blank');
}


item1.addEventListener('click',() => reDirectPortafolio('https://pokedexreact-zeta.vercel.app/#/'));
item2.addEventListener('click',() => reDirectPortafolio('https://rikiandmortyapp.vercel.app/'));
item3.addEventListener('click',() => reDirectPortafolio('https://trivia-blond.vercel.app/index.html'));
item4.addEventListener('click',() => reDirectPortafolio('https://excercise-todolist.vercel.app/'));