document.getElementById("belal").innerHTML = "Books";


document.getElementById("belal1").innerHTML = "ALEX LIBRARY";



document.getElementById("mn").setAttribute("style", "0");



document.getElementById('vvv').style.display = 'flex';


document.getElementById('eee').style.display = 'none';


function phone(){
     document.getElementById('phone').textContent = '+1 (123) 456-7890';
}

function email(){
    document.getElementById('email').textContent = 'Alexlibrary@gmail.com';
}


function changeImage() {
    
    var myImage = document.getElementById('myImage');
    myImage.src = 'images/71aIUtWoqHL._AC_UF1000,1000_QL80_.jpg';
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("belal").innerHTML = "Books";
});




function askForConfirmation() {
   
    var userConfirmation = confirm("Are you sure?");

    
    if (userConfirmation) {
        alert("successful sign up!");
    } else {
        alert("User clicked Cancel or closed the dialog.");
    }
}




function askForInput() {
    
    var userInput = prompt("Enter your Nick name: ");

    
    if (userInput !== null) {
        alert("HELLO NICE TO MEET YOU : " + userInput);
    } else {
        alert("User clicked Cancel or closed the dialog.");
    }
}





