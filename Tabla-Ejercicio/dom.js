let table = document.querySelector("#users-table tbody")
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

function createTable(userlist){
    for (let i = 0; i < userlist.length; i++) {
        let usersEmails = userlist[i].email;
        if(usersEmails.endsWith("@academlo.com")){
            let newRow = document.createElement("tr");
            table.appendChild(newRow);

            let userName = document.createElement("td");
            userName.innerText = userlist[i].name;

            let userEmail = document.createElement("td");
            userEmail.innerText = userlist[i].email;

            let userEdad = document.createElement("td");
            userEdad.innerText = userlist[i].age;

            let userSexo = document.createElement("td");
            userSexo.innerText = userlist[i].gender;

            let userRedes = document.createElement("ul");

            for (let index = 0; index < userlist[i].social.length; index++) {
                let userFila = document.createElement("li");
                userFila.innerText = userlist[i].social[index].name + ": " + userlist[i].social[index].url;
                userRedes.appendChild(userFila);
                
            }

            //let userFila = document.createElement("li");
            //userFila.innerText = userlist[i].social[0].name + ": " + userlist[i].social[0].url;

            //let userFila2 = document.createElement("li");
            //userFila2.innerText = userlist[i].social[1].name + ": " + userlist[i].social[1].url;

            newRow.appendChild(userName);
            newRow.appendChild(userEmail);
            newRow.appendChild(userEdad);
            newRow.appendChild(userSexo);
            newRow.appendChild(userRedes);
            //userRedes.appendChild(userFila);
            //userRedes.appendChild(userFila2);
        }
            
    }
}

createTable(users);

