let field = document.querySelector('.field')
let startBlock = document.querySelector('.start-block')
let goal = field.querySelector('.field__goal')
let cout = document.querySelector('.count')
let timerBlock = document.querySelector('.timer')
let endBlock = document.querySelector('.end-block')
let attemptBtn = document.querySelector('.attempt-btn')
let sec = 0;

function start(){
    this.style.display = 'none'
    goal.onclick = clickFunc()
    timer()
}
function timer(){
    let timerStop = setTimeout(() => {
        goal.onclick = '';
    }, Number(timerBlock.textContent) * 1000)
    
    let timer = setInterval(()=>{
        let currentNum = Number(timerBlock.textContent)
        if(currentNum < 2){
            endBlock.classList.add('end-block--active')
        } 
        timerBlock.textContent = currentNum - 1;
        if(currentNum === 1){
            clearInterval(timer)
           
        }
        
    },1000)
}
function clickFunc(){
    let click =  0
        return function(){
               randGoalCoords()
                click++
                cout.textContent = click
                return click
        }
}
function randGoalCoords(){
    let randX = Math.random() * field.offsetWidth
    let randY = Math.random() * field.offsetHeight
    if(randX > field.offsetWidth - goal.offsetWidth){
            goal.style.left =  field.offsetWidth - goal.offsetWidth + 'px'
    }else{
        goal.style.left =  randX + 'px'
    }
    if(randY > field.offsetHeight - goal.offsetHeight){
        goal.style.top =  field.offsetHeight - goal.offsetHeight  + 'px'
    }else{
        goal.style.top =  randY + 'px'
    }
}
function attempt(){
    timerBlock.textContent = 15
    endBlock.classList.remove('end-block--active')
    cout.textContent = 0;
    goal.onclick = clickFunc()
    timer()
}

randGoalCoords()
startBlock.onclick = start;
attemptBtn.onclick = attempt;

/*         let fieldRect = field.getBoundingClientRect() */
