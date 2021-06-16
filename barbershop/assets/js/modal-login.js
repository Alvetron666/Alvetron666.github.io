let loginBtn = document.querySelector(".login-btn");
let loginWindow = document.querySelector(".modal-window-login");
let closeBtn = loginWindow.querySelector(".close-btn");
let loginInput = loginWindow.querySelector("#login-input");
let passwordInput = loginWindow.querySelector("#password-input");
let sendBtn = loginWindow.querySelector("#send-btn");

loginBtn.addEventListener("click", function(evt){
    evt.preventDefault();
   loginWindow.classList.remove("animation");
    loginWindow.classList.add("active");
    loginWindow.classList.add("swipe-animation");
    
})


sendBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    loginInput.style = loginInput;
    passwordInput.style = loginInput;
    if(!loginInput.value || !passwordInput.value){
     
       loginWindow.classList.remove("animation");
        loginWindow.offsetWidth = loginWindow.offsetWidth;
        loginWindow.classList.add("animation");
        
        if(!loginInput.value && !passwordInput.value){
            loginInput.style = 'border-color:red;'; 
            passwordInput.style = 'border-color:red;';
        }else if(!loginInput.value){
            loginInput.style = 'border-color:red;'; 
        }else{
            passwordInput.style = 'border-color:red;';
        }
    }
    
})

/* CLOSE BUTTONS*/
closeBtn.addEventListener("click", function(){
          loginWindow.classList.remove("active");
  })
window.addEventListener("keydown", function(e){
        if(e.keyCode == 27){
           loginWindow.classList.remove("active");
        }
  })

