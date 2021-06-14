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

let updateFlag = false;
let updateIndex = null;


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
        buttonEditar.addEventListener("click", () => editarElementoLista(arreglo, index));
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

    if (document.getElementById("name").value == "" || document.getElementById("model").value == "" || document.getElementById("doors").value == "" || document.getElementById("color").value == "" || document.getElementById("brand").value == "") {
        alert("No pueden haber campos vacios");

    } else if (updateFlag == true){
      let elementoUpdate = {
        name: document.getElementById("name").value,
        model: document.getElementById("model").value,
        doors: document.getElementById("doors").value,
        color: document.getElementById("color").value,
        brand: document.getElementById("brand").value
    };

    cars[updateIndex] = elementoUpdate;
    updateFlag = false;
    updateIndex = null;
    renderTarjetas(cars);
    AgregarElemento.reset();

    } else {
        let elemento = {
          name: document.getElementById("name").value,
          model: document.getElementById("model").value,
          doors: document.getElementById("doors").value,
          color: document.getElementById("color").value,
          brand: document.getElementById("brand").value
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

const editarElementoLista = (arreglo, index) => {
    document.getElementById("name").value = arreglo[index].name;
    document.getElementById("model").value = arreglo[index].model;
    document.getElementById("doors").value = arreglo[index].doors;
    document.getElementById("color").value = arreglo[index].color;
    document.getElementById("brand").value = arreglo[index].brand;
    updateIndex = index;
    updateFlag = true;

}

renderTarjetas(cars);
AgregarElemento.addEventListener("submit", agregarElementoLista);


 

