let field = document.querySelector('.field')
let goal = field.querySelector('.field__goal')
let cout = document.querySelector('.count')
let timerBlock = document.querySelector('.timer')
let sec = 0;

goal.onclick = clickFunc();


let timerStop = setTimeout(() => {
    goal.onclick = '';
}, 60000)

let timer = setInterval(()=>{
    let currentNum = Number(timerBlock.textContent);
    if(currentNum < 1){
        clearInterval(timer)
    }else{
        timerBlock.textContent = currentNum - 1;
    }
    
},1000)
function clickFunc(){
    let click =  0;

        return function(){
                let randX = Math.random() * field.offsetWidth;
                let randY = Math.random() * field.offsetHeight;
                if(randX > field.offsetWidth - goal.offsetWidth){
                        goal.style.left =  field.offsetWidth - goal.offsetWidth + 'px';
                }else{
                    goal.style.left =  randX + 'px';
                }
                if(randY > field.offsetHeight - goal.offsetHeight){
                    goal.style.top =  field.offsetHeight - goal.offsetHeight  + 'px';
                }else{
                    goal.style.top =  randY + 'px';
                }

                click++;
                cout.textContent = click;
        }
}

/*         let fieldRect = field.getBoundingClientRect() */
