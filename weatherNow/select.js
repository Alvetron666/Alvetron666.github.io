let selHeader = document.querySelector('.sel-header p')
let customOption = []

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
        for(let key in cities){
            if(key === this.textContent){
                request(cities[key]) 
            }
        }
    };
})

function optionClick(a){
    selHeader.textContent = a.textContent;
}