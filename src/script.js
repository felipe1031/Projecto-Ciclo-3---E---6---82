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

});

