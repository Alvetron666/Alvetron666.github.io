let currentPage = window.location.href;
let currentPageSplit = currentPage.split('/')[9];
let katalog = document.querySelector('#catalog');


if(currentPageSplit === 'catalog.html'){
    katalog.classList.add('active');
}