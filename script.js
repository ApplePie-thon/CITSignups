const logo = document.getElementById('homePage');
logo.addEventListener('click', function() {
    window.location.href = "./index.html"
})

//First option
var maxappetizer = 10;
var maxdessert = 5;

/*MAKE ADAPTABLE FOR ALL TABLES, NOT JUST APPETIZERS*/
function addItem() {
    profanitylist = ["bitch", "fuck", "ass"]
    //Creates a new row with name, dish, and email info
    if(
        document.getElementById("nameInput").value == "" ||
        document.getElementById("dishNameInput").value == "" ||
        document.getElementById("emailInput").value == ""
        ){
        document.getElementById("confirm").innerHTML = "Please fill in indicated fields";
        document.getElementById("confirm").style.color = "red";
        document.getElementById("confirm").style.fontWeight = "bold";
        if(document.getElementById("nameInput").value == ""){
            document.getElementById("nameInput").style.border = "3px solid red";
        } else {
            document.getElementById("nameInput").style.border = "1px solid black";
        }
        if(document.getElementById("dishNameInput").value == ""){
            document.getElementById("dishNameInput").style.border = "3px solid red";
        } else {
            document.getElementById("dishNameInput").style.border = "1px solid black";
        }
        if(document.getElementById("emailInput").value == ""){
            document.getElementById("emailInput").style.border = "3px solid red";
        } else {
            document.getElementById("emailInput").style.border = "1px solid black";
        }
    }  else if(
        profanitylist.includes(document.getElementById("nameInput").value.trim().toLowerCase()) || 
        profanitylist.includes(document.getElementById("dishNameInput").value.trim().toLowerCase())
    ){
        alert("profanity detected, instance sent to event lead");
        document.getElementById("nameInput").value = "";
        document.getElementById("dishNameInput").value = "";
    }
    else {
        document.querySelector("#" + tableid + "Signup tfoot").innerHTML = "";

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
        document.querySelector("#" + tableid + "Signup tbody").appendChild(newtr);

        //Updates count of signed up people

        //hiding input section and clearing inputs

        document.getElementById("inputs").style.setProperty("display", "none", "important");
        document.getElementById("nameInput").value = "";
        document.getElementById("dishNameInput").value = "";
        document.getElementById("emailInput").value = "";
        
        //Manual, will need to be modified to loop through all checkboxes in the future
        document.getElementById("dairy").checked = false;
        document.getElementById("fish").checked = false;
        document.getElementById("gluten").checked = false;
        document.getElementById("meat").checked = false;

        document.getElementById("extras").value = "";

        //Adds another sign up in the tfoot if under max capacity
        if (document.querySelector("#" + tableid + "Signup tbody").querySelectorAll("tr").length < window["max" + tableid]) {
            const newRow = document.createElement('tr');    
            newRow.className = "signUp";
            
            const newData = document.createElement("td");
            newData.style.textAlign = "right";
            newData.setAttribute('colspan', 3);

            //Maintains alternating colors in table
            if (document.querySelector("#" + tableid + "Signup tbody").querySelectorAll("tr").length % 2 == 1) {
                newData.style.backgroundColor = "rgb(112, 191, 255)";
            } else {
                newData.style.backgroundColor = "rgb(163, 214, 255)";
            }

            const newButton = document.createElement("button");
            newButton.className = "signUpButton";
            newButton.innerHTML = "Sign Up";
            newButton.value = tableid;
            
            newData.appendChild(newButton);
            newRow.appendChild(newData);
            document.querySelector("#" + tableid + "Signup tfoot").appendChild(newRow);

            //Updates available slots number

            console.log(window["max" + tableid]);
            console.log(document.querySelector("#" + tableid + "Signup tbody").querySelectorAll("tr"));

            document.querySelector("#" + tableid + "Signup th").innerHTML = tableText + " (" + (window["max" + tableid]-document.querySelector("#" + tableid + "Signup tbody").querySelectorAll("tr").length) + "/" + window["max" + tableid] + " available slots)";

            newButton.addEventListener("click", function(){
                showInputs();
                tableid = newButton.value;
            }); /*Recursion to keep adding the sign up button in the footer until table hits max length*/
        } else if (document.querySelector("#" + tableid + "Signup tbody").querySelectorAll("tr").length == window["max" + tableid]) {
            //Updates available slots number
            document.querySelector("#" + tableid + "Signup th").innerHTML = tableText + " (All slots filled)";
        }
    }
}
function emailtolead() {
    
}
function showInputs(){
    document.getElementById("inputs").style.setProperty("display", "block", "important");
    document.getElementById("confirm").innerHTML = "Confirm";
    document.getElementById("confirm").style.color = "black";
    document.getElementById("confirm").style.fontWeight = "normal";
    document.getElementById("nameInput").style.border = "1px solid black";
    document.getElementById("dishNameInput").style.border = "1px solid black";
    document.getElementById("emailInput").style.border = "1px solid black";
}

document.getElementById("confirm").addEventListener('click', function(){
    addItem();
})

document.getElementById("appetizerSignupButton").addEventListener("click", function(){
    showInputs();
    tableid = "appetizer";
    tableText = "Appetizers";
});

document.getElementById("dessertSignupButton").addEventListener("click", function(){
    showInputs();
    tableid = "dessert";
    tableText = "Desserts";
});

//Escapes out of popup when 'X' or escape key pressed
document.getElementById("closeSignUp").addEventListener("click", function(){
    document.getElementById("inputs").style.setProperty("display", "none", "important");
    document.getElementById("nameInput").value = "";
    document.getElementById("dishNameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("extras").value = "";
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("inputs").style.setProperty("display", "none", "important");
        document.getElementById("nameInput").value = "";
        document.getElementById("dishNameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("extras").value = "";
    }
  });