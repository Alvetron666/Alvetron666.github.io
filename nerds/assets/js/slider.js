let sliderBtns = document.querySelectorAll(".slider-btn");
let slide = document.querySelectorAll(".slider-section");



sliderBtns.forEach(function(i){
        i.addEventListener("click", function(){
        
            sliderBtns.forEach(function(k){
                k.classList.remove("active");
            })
            if(!i.classList.contains("active")){
                i.classList.add("active");
            }

            currentBtn = i.getAttribute("data-slide");

            slide.forEach(function(k){
                if(k.classList.contains("active")){
                    k.classList.remove("active");
                }
            })
            slide.forEach(function(k){

                let currentSlide = k.getAttribute("data-slide");
                if(currentSlide === currentBtn){
                    k.classList.add("active");
                }
            })

            

        })
})

