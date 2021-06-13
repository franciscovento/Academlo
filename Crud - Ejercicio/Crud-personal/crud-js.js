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

const renderTarjetas = (arreglo) => {

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
        
        h2UI.innerText = arreglo[index][element];
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
        buttonEliminar.id = "BtnEliminar";
        buttonEliminar.innerHTML = `<span class="material-icons icons-2">delete</span>`
        tarjetaBtns.appendChild(buttonEliminar);    
    });

}

renderTarjetas(cars);



