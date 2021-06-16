let sliderBtn1 = document.getElementById('slider-btn-1');
let sliderBtn2 = document.getElementById('slider-btn-2');
let sliderBtn3 = document.getElementById('slider-btn-3');
let sliderBtns = document.querySelectorAll(".slider-btn");

sliderBtns.forEach(function(i){
    i.addEventListener("click", function(){
        sliderBtns.forEach(function(i){
            i.classList.remove('active')
        })
        i.classList.add('active');
    })
    
})
sliderBtn1.onclick = () => {
    document.querySelector("body").style = "background-color: #849d8f;"
    document.querySelector(".slider-img").src="assets/images/slider/ice-creams.png";
    document.querySelector(".slider-item h1").innerHTML =  'Крем-брюле и пломбир с малиновым джемом';

}
sliderBtn2.onclick = () => {
    document.querySelector("body").style = "background-color: #8996a6;"
    document.querySelector(".slider-img").src="assets/images/slider/ice-creams-2.png";
    document.querySelector(".slider-item h1").innerHTML =  'Шоколадный пломбир и лимонный сорбет ';
}
sliderBtn3.onclick = () => {
    document.querySelector("body").style = "background-color: #9d8b84;"
    document.querySelector(".slider-img").src="assets/images/slider/ice-creams-3.png";
    document.querySelector(".slider-item h1").innerHTML =  'Пломбир с помадкой <br> и клубничный щерб';
}