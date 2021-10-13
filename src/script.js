function setFormMessage(formElement, type, message ) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement-classList.add(`form__message--${type}`)
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.classList.remove("form__input--success");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.classList.add("form__input--success");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}  

//Script para navegacion entre forms dentro del index//
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");    
    const createAccountForm = document.querySelector("#createAccount"); 
    const passwordForgottenForm = document.querySelector("#passwordForgotten");
    

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    
    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkPasswordForgotten").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        passwordForgottenForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkBackToLogin").addEventListener("click", e => {
        e.preventDefault();
        passwordForgottenForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });


    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //AGregar funcion del login//

        setFormMessage(loginForm, "error", "Combinacion invalida");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("input", e =>{
            if (e.target.id === "CreateAccountUsernameInput" && e.target.value.length > 0 && e.target.value.length < 8){
                setInputError(inputElement, "El usuario debe ser de al menos 8 caracteres");
            }   
           
            if (e.target.id === "CreateAccountUsernameInput","LoginUsernameInput" && e.target.value.split(" ").length > 1){
                setInputError(inputElement, "Debe ser una sola palabra");
            }       
                       
                                             
        });    
        inputElement.addEventListener("keydown", e => {
            clearInputError(inputElement);
        });      
    });

});

//inputs id EmailForgotInput, LoginUsernameInput, LoginPasswordInput, CreateAccountUsernameInput, CreateAccountEmailInput, CreateAccountPasswordInput, CreateAccountPasswordConfirmInput, //

