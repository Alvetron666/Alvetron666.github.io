let selHeader = document.querySelector('.sel-header p')
let customOption = []
let storage;
for(let key in cities){
    let div = document.createElement('li');
    div.classList.add('custom-opt');
    div.textContent = key;
    document.querySelector('.sel-body').appendChild(div);
    customOption[customOption.length] = div;
}
customSel.onclick = () => customSel.classList.toggle('active');
customOption.forEach( item => {
    item.onclick = function(){
        optionClick(this)
        request(cities[this.textContent])
        localStorage.setItem('city', this.textContent);
        storage = localStorage.getItem('city');
        console.log(storage)
    };
})
function optionClick(a){
    selHeader.textContent = a.textContent;
}

if(localStorage.getItem('city') != null){
    console.log(localStorage.getItem('city'))
    request(cities[localStorage.getItem('city')]);
}else{
    request(cities.Kyiv);
}
