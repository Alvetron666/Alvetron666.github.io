let modalContact = document.querySelector(".modal-write-use");
let  contactBtn = document.querySelector("#contact-btn");
let contactCloseBtns = document.querySelectorAll(".modal-close-btn");
let contactForm = modalContact.querySelector(".contact-form");
let formSendBtn = contactForm.querySelector(".custom-btn-1")
let inpName = contactForm.getElementsByClassName("name");



let map = document.querySelector(".map-popup");
let mapBtn = document.querySelector(".map-btn");



contactBtn.onclick = () =>{
    modalContact.classList.add("active");
    modalContact.querySelector("input:first-child")
}
mapBtn.onclick = () => {
    map.classList.add("active");
    map.querySelector("button:first-child")
}


contactCloseBtns.forEach(function(i){
    i.addEventListener("click", function(){
        if(map.classList.contains("active")){
            map.classList.remove("active");
        }
        else if(modalContact.classList.contains("active")){
            modalContact.classList.remove("active");
   
        }
        
    })
})




