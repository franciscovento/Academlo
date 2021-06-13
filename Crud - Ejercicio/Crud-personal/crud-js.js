let cars = [
    {
      name: "Mazda 2",
      model: "2019",
      doors: 5,
      color: "red",
      brand: "mazda"
    },
    {
        name: "Toyota",
        model: "2019",
        doors: 5,
        color: "red",
        brand: "mazda"
      },
      {
        name: "Toyota",
        model: "2019",
        doors: 5,
        color: "red",
        brand: "mazda"
      }
  ]

//   DOM

let containerTarjetasUI = document.getElementById("container-tarjetas");
let AgregarElemento = document.getElementById("Formulario");


const renderTarjetas = arreglo => {

    containerTarjetasUI.innerHTML = "";
    let keysArreglo = Object.keys(arreglo[0]);

    arreglo.forEach((element, index) => {
        
        let Tarjeta = document.createElement("div");
        Tarjeta.setAttribute("class", "Tarjeta");
        containerTarjetasUI.appendChild(Tarjeta);
    
        let TarjetaDatosUI = document.createElement("div");
        TarjetaDatosUI.setAttribute("class", "Tarjeta-datos");
        Tarjeta.appendChild(TarjetaDatosUI);
    
        
        keysArreglo.forEach((element, i) => {

        let h2UI = document.createElement("h2");
        h2UI.setAttribute("class", "item");
        TarjetaDatosUI.appendChild(h2UI);
        
        h2UI.innerText = element +": " + arreglo[index][element];
        });

        let tarjetaBtns = document.createElement("div");
        tarjetaBtns.setAttribute("class", "Tarjeta-Btns");
        Tarjeta.appendChild(tarjetaBtns);

        let buttonEditar = document.createElement("button");
        buttonEditar.className = "item-1 btns btns_secondary BtnEditar";
        buttonEditar.id = "BtnEditar";
        buttonEditar.innerHTML = `<span class="material-icons">edit</span>`
        tarjetaBtns.appendChild(buttonEditar);

        let buttonEliminar = document.createElement("button");
        buttonEliminar.className = "item-1 btns BtnEliminar";
        buttonEliminar.addEventListener("click", () => eliminarElementoLista(arreglo, index));
        buttonEliminar.id = "BtnEliminar";
        buttonEliminar.innerHTML = `<span class="material-icons icons-2">delete</span>`
        tarjetaBtns.appendChild(buttonEliminar);    
    });

}

const agregarElementoLista = event => {

    event.preventDefault();
    let name = document.getElementById("name");
    let model = document.getElementById("model");
    let doors = document.getElementById("doors");
    let color = document.getElementById("color");
    let brand = document.getElementById("brand");

    if (name.value == "" || model.value == "" || doors.value == "" || color.value == "" || brand.value == "") {
        alert("No pueden haber campos vacios");
    } else{
        let elemento = {
            name: name.value,
            model: model.value,
            doors: doors.value,
            color: color.value,
            brand: brand.value
        };
        cars.push(elemento);
        renderTarjetas(cars);
        AgregarElemento.reset();
    }


}

const eliminarElementoLista = (arreglo, index) => {
    arreglo.splice(index,1);
    renderTarjetas(cars);
  }

renderTarjetas(cars);
AgregarElemento.addEventListener("submit", agregarElementoLista);


 

