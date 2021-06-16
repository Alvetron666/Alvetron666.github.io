let siteLink = document.querySelectorAll('.site-link');
let li1 = document.querySelectorAll('.hover-list-block a');
let userBtns = document.querySelectorAll('.user-btn');
let sliderBtn = document.querySelector('.slider-item .btn');
console.log(sliderBtn)

siteLink.forEach(function(i){
    i.addEventListener('focus', function(){


        siteLink.forEach(function(i){
            i.classList.remove('active1');
        })

     i.classList.add('active1');

    })
})

userBtns.forEach(function(i){
    i.addEventListener('focus', function(){
        userBtn = i;
        siteLink.forEach(function(j){
            j.classList.remove('active1');
        })
        userBtns.forEach(function(i){
            i.classList.remove('active1');
        })
        userBtn.classList.add('active1');
    })
})


sliderBtn.addEventListener('focus', function(){
    userBtns.forEach(function(i){
        i.classList.remove('active1');
    })
        })

