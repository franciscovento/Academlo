let cars = JSON.parse(localStorage.getItem("arregloStorage"));

//   DOM

let containerTarjetasUI = document.getElementById("container-tarjetas");
let AgregarElemento = document.getElementById("Formulario");

let updateFlag = false;
let updateIndex = null;


// función para guardar en localStorage

const autosStorage = () => {
  if  (typeof Storage !== "undefined"){
  
  localStorage.setItem("arregloStorage", JSON.stringify(cars));
   
  } else {
    alert("Tu navegador no es compatible con este almacenamiento");
  }
};


const renderTarjetas = arreglo => {

      containerTarjetasUI.innerHTML = "";
      //let keysArreglo = Object.keys(arreglo[0]);
      //let arreglo = JSON.parse(localStorage.getItem("arregloStorage"));
      if (arreglo === null) {
        arreglo = [];
      } else {


        arreglo.forEach((element, index) => {
           
          let Tarjeta = document.createElement("div");
          Tarjeta.setAttribute("class", "Tarjeta");
          containerTarjetasUI.appendChild(Tarjeta);
      
          let TarjetaDatosUI = document.createElement("div");
          TarjetaDatosUI.setAttribute("class", "Tarjeta-datos");
          Tarjeta.appendChild(TarjetaDatosUI);
      
        // Agrego elementos manualmente
          let nameUI = document.createElement("h2");
          nameUI.setAttribute("class", "item");
          TarjetaDatosUI.appendChild(nameUI);
          nameUI.innerText = "name: " + element.name;
  
          let modelUI = document.createElement("h2");
          modelUI.setAttribute("class", "item");
          TarjetaDatosUI.appendChild(modelUI);
          modelUI.innerText = "model: " + element.model;
  
          let doorsUI = document.createElement("h2");
          doorsUI.setAttribute("class", "item");
          TarjetaDatosUI.appendChild(doorsUI);
          doorsUI.innerText = "doors: " + element.doors;
  
          let colorUI = document.createElement("h2");
          colorUI.setAttribute("class", "item");
          TarjetaDatosUI.appendChild(colorUI);
          colorUI.innerText = "color: " + element.color;
  
          let brandUI = document.createElement("h2");
          brandUI.setAttribute("class", "item");
          TarjetaDatosUI.appendChild(brandUI);
          brandUI.innerText = "marca: " + element.brand;
  
  
          // keysArreglo.forEach((element, i) => {
  
          // let h2UI = document.createElement("h2");
          // h2UI.setAttribute("class", "item");
          // TarjetaDatosUI.appendChild(h2UI);
          
          // h2UI.innerText = element +": " + arreglo[index][element];
          // });
  
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
    autosStorage();
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
        autosStorage();
        AgregarElemento.reset();
    }
    

}

const eliminarElementoLista = (arreglo, index) => {
    arreglo.splice(index,1);
    autosStorage();
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


