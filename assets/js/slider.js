let sliderBtns = document.querySelectorAll(".slider-btn");



sliderBtns.forEach(function(i){
        i.addEventListener("click", function(){
            sliderBtns.forEach(function(k){
                k.classList.remove("active");
            })
            if(!i.classList.contains("active")){
                i.classList.add("active");
            }

        })
})

