document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email").addEventListener("input", checkInput);
    document.getElementById("password").addEventListener("input", checkInput);
});

function checkInput() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email === "" || !email.includes("@gmail.com")) {
        showMessage("Por favor, insira um endereço de email do Gmail válido.");
    } else if (password === "") {
        showMessage("Por favor, insira sua senha.");
    } else {
        hideMessage();
    }
}

function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
    messageElement.style.display = "block";
}

function hideMessage() {
    var messageElement = document.getElementById("message");
    messageElement.style.display = "none";
}

function bloqLogin() {
    let email = document.getElementById("inputEmail3").value;
    let senha = document.getElementById("inputPassword3").value;
    if (email == "") {
        alert("Preencha os campos.");

    }
    else if (senha == "") {
        alert("Preencha os campos.");
    }

}