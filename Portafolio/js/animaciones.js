let entradaIzquierda = document.querySelectorAll(".entradaIzquierda");

function mostrarScrollIzquierda(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < entradaIzquierda.length; i++ ){
        let alturaAnimado = entradaIzquierda[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
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
        if(alturaAnimado - 500 < scrollTop){
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
        if(alturaAnimado - 500 < scrollTop){
            entradaArriba[i].style.opacity = 1;
            entradaArriba[i].classList.add("mostrarArriba");
        }
    } 
}

window.addEventListener('scroll', mostrarScrollIzquierda);
window.addEventListener('scroll', mostrarScrollDerecha);
window.addEventListener('scroll', mostrarScrollArriba);