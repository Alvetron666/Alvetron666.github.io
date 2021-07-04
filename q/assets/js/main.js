function fixOnScroll(){
    let header =  document.querySelector(".main__header");
    let headerHeight = header.clientHeight;

    window.addEventListener('scroll', function(){
        let windowPos = window.scrollY;
        if(windowPos > headerHeight){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    })
}

function burderMenu(){
    let burgerBtn = document.querySelector('.burger__menu');
    let linksList = document.querySelector('.links__list');

    burgerBtn.onclick = () => {
        if( ! burgerBtn.classList.contains('active') ){
            burgerBtn.classList.add('active');
            linksList.style.display = 'flex';
        }else{
            burgerBtn.classList.remove('active');
            linksList.style.display = 'none';
        }
        
    }
}

function scrollToHandler(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}

fixOnScroll();
burderMenu();
