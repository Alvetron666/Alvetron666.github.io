$(document).ready(function() {

    $('.nav-tabs > li a[title]').tooltip();
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function(e) {
        scrollTo(0, 0)
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });

    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    jQuery(function($) {
        $(".phone-mask").mask("+7 (999) 999-99-99");
    });

});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
 
let checkboxAll = document.querySelectorAll('.checkbox')
checkboxAll.forEach((item) => {
    item.addEventListener('click', function() {
        item.previousElementSibling.classList.toggle('border')
    })
})

let calcBtn = document.querySelectorAll('.calc-btn')
let wizard = document.querySelector('#wizard')
let closeQuiz = document.querySelector('.close')
let firstPane = document.querySelector('.tab-pane--first')
let lastPane = document.querySelector('.wizard-finish-tab')
let phone = document.querySelector('.header__phone--mob')
let item = document.querySelectorAll('.country-item')
let callbackBtn = document.querySelectorAll('.header__callback')
let quizBtn = document.querySelector('.wizar-quiz')
let callbackForm = document.querySelector('.callback-form')
let callbackCloseBtn = callbackForm.querySelector('.callback-close')
let body = document.querySelector('body')
let advantageBlock = document.querySelector('.intro-mobile__bottom')
let countryItems = step1.querySelectorAll('.country-item input')




item.forEach((item) => {
    item.addEventListener('click', function(e) {
        if (item.childNodes[3].checked == true) {
            item.childNodes[3].checked = false
            item.childNodes[1].style.borderRadius = '0'
            item.childNodes[1].style.border = 'none'
        } else {
            item.childNodes[3].checked = true
            item.childNodes[1].style.border = '3px solid #00ad6b'
            item.childNodes[1].style.borderRadius = '7px'
        }

    })
})

calcBtn.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        scrollTo(0, 0)
        wizard.classList.add('wizard--active')
        phone.style.display = 'none'
        if(window.innerWidth < 500){
            console.log(1);
            advantageBlock.style.display = 'none';
        }
    })
})

closeQuiz.addEventListener('click', function(e) {
    e.preventDefault()
    firstPane.classList.add('active')
    wizard.classList.remove('wizard--active')
    lastPane.classList.remove('active')
})

quizBtn.onclick = () =>{
    window.open ('thank.html','_self',false);
}


callbackBtn.forEach( item => {
    item.onclick = () =>{
        callbackForm.classList.add('active');
    }
})

callbackCloseBtn.onclick = () => {
    callbackForm.classList.remove('active');
}

