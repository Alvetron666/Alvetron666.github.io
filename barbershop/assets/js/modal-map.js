let mapBtn = document.querySelector(".map-btn");
let mapWindow = document.querySelector(".modal-map");
let mapCloseBtn = mapWindow.querySelector(".close-btn-map");

mapBtn.addEventListener("click", function(){
        mapWindow.classList.add("active");
})

mapCloseBtn.addEventListener("click", function(){
        mapWindow.classList.remove("active");
})

window.addEventListener("keydown", function(e){
        if(e.keyCode == 27){
           mapWindow.classList.remove("active");
        }
  })