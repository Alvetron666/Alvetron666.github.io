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



let sliderBtns = document.querySelectorAll(".slider-btn");
let sliderItems = document.querySelectorAll(".slider-item");


sliderBtns.forEach(function(i){
    i.addEventListener("click", function(){
        sliderBtns.forEach(function(k){
            k.classList.remove("active");
        })
        i.classList.add("active");
        currentBtn = i.getAttribute("data-slider-btn");
        


        sliderItems.forEach(function(k){
                k.classList.remove("active");  
        })
        sliderItems.forEach(function(k){
            currentItem = k.getAttribute("data-slider-item");
            if(currentItem === currentBtn){
                k.classList.add("active");
                
            }
           
        })
    })
})




let tabsBtn = document.querySelectorAll(".advantage-btn");
let services = document.querySelectorAll(".services-desc-item");


tabsBtn.forEach(function(i){
    i.addEventListener("click", function(evt){
        evt.preventDefault();
        btn = i;
        currentBtn = i.getAttribute("data-btn");
        

        services.forEach(function(k){
            k.classList.remove("active");
        })

        services.forEach(function(k){
            let currentTab = k.getAttribute("data-btn");
            
           if(currentTab === currentBtn){
               
               k.classList.add("active");
           }
        })
    })
})