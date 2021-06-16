let popupContact = document.querySelector(".form-write-to-us");
let popupBtn = document.querySelector(".contact-btn");

let nameInput = popupContact.querySelector("#nameid")
let emailInput = popupContact.querySelector("#emailid")
let textareaInput = popupContact.querySelector("#textarea")

let sendBtn = popupContact.querySelector(".send-btn");
let closeBtn = popupContact.querySelector(".close-btn");


popupBtn.onclick = () =>{
    popupContact.style ="display:block;"
    if(!nameInput.value){
        nameInput.focus();
    }else if(!emailInput.value){
        emailInput.focus();
    }else if(!textareaInput.value){
        textareaInput.focus();
    }
}


sendBtn.onclick = () =>{
    nameInput.style = "border-color: black;"
    emailInput.style = "border-color: black;"
    textareaInput.style = "border-color: black;"

    if( !nameInput.value || !emailInput.value ||!textareaInput.value){
        popupContact.classList.remove("animation");
        popupContact.offsetWidth = popupContact.offsetWidth;
        popupContact.classList.add("animation");
    }
    if(!nameInput.value){
        nameInput.focus();
    }else if(!emailInput.value){
        emailInput.focus();
    }else if(!textareaInput.value){
        textareaInput.focus();
    }

    if(!nameInput.value){
        nameInput.style = "border-color: red;"
    }
    if(!emailInput.value){
        emailInput.style = "border-color: red;"
    }
    if(!textareaInput.value){
        textareaInput.style = "border-color: red;"
    }
}


closeBtn.onclick = () =>{
    popupContact.style = "display: none";
}