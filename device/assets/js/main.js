let catBtn = document.querySelector(".catalogue-btn");
let hiddenMenu =  document.querySelector(".catalog-hidden");

catBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    if(! hiddenMenu.classList.contains("active")){
        hiddenMenu.classList.add("active");
        hiddenMenu.querySelector(".catalog-list li a").focus()
 
    }else{
        hiddenMenu.classList.remove("active");
        catBtn.focus();
    }
})

