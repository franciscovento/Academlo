
//ELEMENTOS DE HTML

//containers
let nameContainer = document.getElementById("name-container");
let formContainer = document.getElementById("form-container");
let contentContainer = document.getElementById("content-container");
let questionContent = document.getElementById("questionsContent");


// formularios
let formName = document.getElementById("form-name");
let formQuestions = document.getElementById("trivia");
let answers = document.getElementsByClassName("btns-answers");

//VARIABLES JS CONTROLADORES

let puntuaciones = JSON.parse(localStorage.getItem("arregloStorage"));
let score = 0;
let player;

let questions;
let correct_index_answer;
let qIndex = 0;

// VARIABLES API

let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

//FUNCIONES

const triviaStorage = () => {
    if  (typeof Storage !== "undefined"){
    
    localStorage.setItem("arregloStorage", JSON.stringify(puntuaciones));
     
    } else {
      alert("Tu navegador no es compatible con este almacenamiento");
    }
  };

const savePlayer = event => {
    event.preventDefault();
    if (document.getElementById("player-name").value == "") {
        alert("Tienes que ingresar un nombre para continuar");
    } else if (puntuaciones === null){
        puntuaciones = [];

        let player = {
            name: document.getElementById("player-name").value,
            puntuacion: score,
        }
        puntuaciones.push(player);
        triviaStorage();
        nameContainer.style.display = "none";
        formContainer.style.display = "block";
        
    } 
    else {

        let flag = true;
        for (let i = 0; i < puntuaciones.length; i++) {
            let nombre = puntuaciones[i].name 
            if (nombre === document.getElementById("player-name").value ) {
                flag = false;
            }            
        }

        if (flag == true) {
             player = {
                name: document.getElementById("player-name").value,
                puntuacion: score,
            }
            puntuaciones.push(player);
            triviaStorage();
            nameContainer.style.display = "none";
            formContainer.style.display = "block";
            
        }else {
            alert("Ya existe un jugador con ese nombre, por favor ingresa otro");
        }

       
    }
    
}

const getQuestions = e => {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        questions = data.results;
        nextQuestions();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const nextQuestions = () => {
      console.log(qIndex);
      console.log("la puntuación es " + score)
    if (qIndex == amount.value) {
      showFinalResults();
      return;
    }
  
    if (questions.length > 0) {
      formContainer.style.display = "none";
      contentContainer.style.display = "block";
      let currentQuestion = questions[qIndex];
      document.getElementById("questionName").innerText =
      currentQuestion.question;
  
      if (currentQuestion.incorrect_answers.length == 1) {
        document.getElementById(1).innerHTML = "True";
        document.getElementById(2).innerHTML = "False";
        document.getElementById(3).style.display = "none";
        document.getElementById(4).style.display = "none";
        if (currentQuestion.correct_answer === "True"){ correct_index_answer = 1;}
        else {correct_index_answer = 2;}
      } else {
        document.getElementById(3).style.display = "inline";
        document.getElementById(4).style.display = "inline";
     

        correct_index_answer = Math.floor(Math.random() * 4) + 1;
        document.getElementById(correct_index_answer).innerHTML = currentQuestion.correct_answer;

        let j = 0;
        for (let i = 1; i <= 4; i++) {
          if (i == correct_index_answer) continue;
          document.getElementById(i).innerHTML =
            currentQuestion.incorrect_answers[j];
          j++;
        }
      }
    }
  
    document.getElementById("question_index").innerHTML = qIndex + 1;
    document.getElementById("num_questions").innerHTML = amount.value;
    console.log("la respuesta correcta es " + correct_index_answer);
  };
  
const selectAnswer = (id) =>{
    console.log(id);
    if (id == correct_index_answer) {
        score += 1;
        player.puntuacion = score;
        triviaStorage();
        qIndex++;
    }else{
        score += 0;
        qIndex++;
    }
    nextQuestions();
}



 //FOR QUE RECORRA TODOS LOS BOTONES
for (let i = 0; i < answers.length; i++) {
    const element = answers[i];
    element.addEventListener("click", () => selectAnswer(element.id))
}




  const showFinalResults = () => {

    questionContent.innerHTML = "";
    let encabezado = document.createElement("div");
    encabezado.innerHTML = `<h2>¡Haz conseguido <span class="trivia-game-span">${score} puntos!</span></h2>
    <h4>...de un total de ${amount.value} preguntas</h4>`
    questionContent.appendChild(encabezado);

    let table = document.createElement("table");
    table.setAttribute("id", "users-table");
    questionContent.appendChild(table);

    let thead = document.createElement("thead");
    table.appendChild(thead);

    let trHead = document.createElement("tr");
    thead.appendChild(trHead);

    let thName = document.createElement("th");
    thName.setAttribute("class", "head-table");
    thName.innerText = "Nombre";
    trHead.appendChild(thName);

    let thPuntos = document.createElement("th");
    thPuntos.setAttribute("class", "head-table");
    thPuntos.innerText = "Puntos";
    trHead.appendChild(thPuntos);

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let trContent = document.createElement("tr");
    tbody.appendChild(trContent);

    puntuaciones.forEach(element => {

      let trContent = document.createElement("tr");
      tbody.appendChild(trContent);

      let tdNAme = document.createElement("td");
      tdNAme.setAttribute("class", "content-table");
      tdNAme.innerText = element.name;
      
      let tdPuntos = document.createElement("td");
      tdPuntos.setAttribute("class", "content-table");
      tdPuntos.innerText = element.puntuacion;

      trContent.appendChild(tdNAme);
      trContent.appendChild(tdPuntos);
    });

    let enlace = document.createElement("a");
    enlace.setAttribute("href","index.html");
    questionContent.appendChild(enlace);

    let buttonVolver = document.createElement("button");
    buttonVolver.setAttribute("class", "btns btns-answers");
    buttonVolver.innerText = "Volver a intentar";
    enlace.appendChild(buttonVolver);


  //   questionContent.innerHTML = 
  //   `<h2>¡Haz conseguido <span class="trivia-game-span">${score} puntos!</span></h2>
  //   <h4>...de un total de ${amount.value} preguntas</h4>
  //   <table id="users-table">
  //   <thead>
  //     <tr>
  //       <th class="head-table">Nombre</th>
  //       <th class="head-table">Preguntas</th>
  //       <th class="head-table">Puntos</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //       <tr>
  //           <td class="content-table">Gonzalo</td>
  //           <td class="content-table">10</td>
  //           <td class="content-table">7 Pts.</td>
  //        </tr>
  //   </tbody>
  // </table>`
  };



// EVENTOS

formName.addEventListener("submit", savePlayer);
formQuestions.addEventListener("submit", getQuestions);


