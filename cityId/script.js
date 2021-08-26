let input = document.querySelector('input');
let button = document.querySelector('button')
let p = document.querySelector('p');


button.onclick = f1;


function f1(){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c3e4df96faf834664217c9bb7db6bdf2`)
    .then(data => {
        if(data.status === 404){
            p.textContent = 'Not Found'
        }else{
            return data.json();
        }
    })
    .then(data =>{
        try{
            p.textContent = data.id;
        }catch(err){}
    })
    
}