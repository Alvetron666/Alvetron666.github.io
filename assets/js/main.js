let heartAnim = document.querySelector('footer .container');
let heartAnimPos = heartAnim.offsetTop;
let heartimg = document.querySelector('.heart__icon');

window.addEventListener('scroll', function(){
    windowPos = +window.scrollY + +window.innerHeight;
    if(windowPos >= heartAnimPos){
        heartimg.classList.add('active');
    }else{
        heartimg.classList.remove('active'); 
    }
})
