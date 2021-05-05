document.querySelector(".generate__btn").onclick = BtnClick

function BtnClick(){
    let inputMin = document.querySelector(".input__min").value
    let inputMax = document.querySelector(".input__max").value

    let result = Math.floor(Math.random() * (Number(inputMax) - Number(inputMin) + 1) + Number(inputMin)) 

   if(! result == 0)
   {
    document.querySelector(".result").innerHTML = result

   }else
   { 
    document.querySelector(".result").innerHTML = "Enter numbers"
   }
    
    

}