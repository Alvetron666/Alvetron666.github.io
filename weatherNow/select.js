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
    };
})

function optionClick(a){
    selHeader.textContent = a.textContent;
}

try{
    storage = localStorage.getItem('city');
    request(cities[storage]);
}catch(err){
    request(cities.Kyiv);
}