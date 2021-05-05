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


let catBtn = document.querySelector(".catalogue-btn");
let hiddenMenu =  document.querySelector(".catalog-hidden");

catBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    if(! hiddenMenu.classList.contains("active")){
        hiddenMenu.classList.add("active");
 
    }else{
        hiddenMenu.classList.remove("active");
    }
})

