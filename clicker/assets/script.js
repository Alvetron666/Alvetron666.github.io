let field = document.querySelector('.field')
let startBlock = document.querySelector('.start-block')
let goal = field.querySelector('.field__goal')
let cout = document.querySelector('.count')
let timerBlock = document.querySelector('.timer')
let timer;
let endBlock = document.querySelector('.end-block')
let resNum = endBlock.querySelector('.end-block__res')
let attemptBtn = document.querySelector('.attempt-btn')
let settingBtn = document.querySelector('.setting-btn')
let settingBlock = document.querySelector('.settings')
let sizeInp = document.querySelector('.size-range')
let goalSizeText = document.querySelector('.goal-size')
let timerRange = document.querySelector('.timer-range')
let timerText = document.querySelector('.timer-switcher')
let skinItem = document.querySelectorAll('.skin-menu__item')
let num = 0;
let 

function start(){
    this.classList.add('dn')
    randGoalCoords()
    goal.onclick = clickFunc()
    timerFunc()
}
function timerFunc(){
/*     let timerStop = setTimeout(() => {
        goal.onclick = '';
    }, Number(timerBlock.textContent) * 1000)
     */
    timer = setInterval(()=>{
        let currentNum = Number(timerBlock.textContent)
        if(currentNum < 2){
            endBlock.classList.add('end-block--active')
            resNum.textContent = cout.textContent;
        } 
        timerBlock.textContent = currentNum - 1;
        if(currentNum === 1){
            goal.onclick = '';
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
        }
}
function randGoalCoords(){
    let randX = parseInt(Math.random() * (field.offsetWidth - goal.offsetWidth))
    let randY = parseInt(Math.random() * (field.offsetHeight - goal.offsetHeight))
    goal.style.left =  randX + 'px'
    goal.style.top =  randY + 'px'
}
function attempt(){
    timerChanger()
    endBlock.classList.remove('end-block--active')
    cout.textContent = 0;
    goal.onclick = clickFunc()
    timerFunc()
}

function showSetting(){
    num++
    goal.onclick = ''
    if(num % 2 === 0){
        goal.classList.remove('goal-middle')
        startBlock.classList.remove('dn')
        startBlock.onclick = start
    }else{
        if(!startBlock.classList.contains('dn')){
            startBlock.classList.add('dn')
        }
        clearInterval(timer)
        timerChanger()
        cout.textContent = 0;
        goal.classList.add('goal-middle')
    }
    settingBlock.classList.toggle('db')
}
function sizeChanger(){
    goal.style.width = sizeInp.value + '%'
    goal.style.height = sizeInp.value + '%' 
    goalSizeText.textContent = goal.offsetWidth
}
function timerChanger(){
    timerBlock.textContent  = timerRange.value
    timerText.textContent = timerRange.value
}

startBlock.onclick = start
attemptBtn.onclick = attempt
settingBtn.onclick = showSetting
sizeInp.oninput = sizeChanger
timerRange.oninput = timerChanger

sizeChanger()

skinItem.forEach( item => {
    console.log(item.src)
})

