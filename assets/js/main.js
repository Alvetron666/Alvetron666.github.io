let heartAnim = document.querySelector('footer .container');
let heartAnimPos = heartAnim.offsetTop;
let heartimg = document.querySelector('.heart__icon');
console.log(heartimg)
window.addEventListener('scroll', function(){
    windowPos = +window.scrollY + +window.innerHeight;
    console.log(windowPos)
    if(windowPos >= heartAnimPos){
        heartimg.classList.add('active');
        window.offsetTop = window.offsetTop;
        

    }
})