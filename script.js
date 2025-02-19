const logo = document.getElementById('homePage');
logo.addEventListener('click', function() {
    window.location.href = "./index.html"
})


const maxAppetizer = 10;
let number = 0;

function addItem() {
    document.getElementById("appetizerSignup").querySelector("tfoot").innerHTML = "";
    
    //Creates a new row with name, dish, and email info

    const newtr = document.createElement("tr");
    const name = document.createElement("td");
    name.innerHTML = document.getElementById("nameInput").value;
    const item = document.createElement("td");
    item.innerHTML = document.getElementById("dishNameInput").value;
    const email = document.createElement("td");
    email.innerHTML = document.getElementById("emailInput").value;

    newtr.appendChild(name);
    newtr.appendChild(item);
    newtr.appendChild(email);
    
    //Adds new row to tbody
    document.querySelector("#appetizerSignup tbody").appendChild(newtr);

    //Updates count of signed up people
    number += 1;

    //Adds another sign up in the tfoot if under max capacity
    if (number < maxAppetizer) {
        const newRow = document.createElement('tr');    
        newRow.className = "signUp";
        
        const newData = document.createElement("td");
        newData.style.textAlign = "right";
        newData.setAttribute('colspan', 3);

        const newButton = document.createElement("button");
        newButton.className = "signUpButton";
        newButton.innerHTML = "Sign Up";
        
        newData.appendChild(newButton);
        newRow.appendChild(newData);
        document.querySelector("#appetizerSignup tfoot").appendChild(newRow);

        newButton.addEventListener("click", addItem); /*Recursion to keep adding the sign up button in the footer until table hits max length*/
    }
}

document.getElementById("signup").addEventListener('click', function(){
    addItem();
})