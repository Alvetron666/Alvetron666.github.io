let feedbackBtn = document.getElementById('feedback-btn');
let modalFeedback = document.querySelector(".modal-feedback");

let feedbackForm = modalFeedback.querySelector(".feedback-form");
let submBtn = feedbackForm.querySelector(".feedback-form .btn");

let nameIn = modalFeedback.querySelector(".name-inp");
let mailIn = modalFeedback.querySelector(".email-inp");
let closeBtn = modalFeedback.querySelector(".close-btn");

feedbackBtn.onclick = (evt) =>{
    evt.preventDefault();
    modalFeedback.style="display: block";
    nameIn.focus();
}

submBtn.onclick = (evt) =>{
    evt.preventDefault();
    nameIn.style="border:solid 1px black";
    mailIn.style="border:solid 1px black";
    if( !nameIn.value || !mailIn.value){
        feedbackForm.classList.remove("wrong-anim");
        feedbackForm.offsetWidth = feedbackForm.offsetWidth;
        feedbackForm.classList.add("wrong-anim");

        if(!nameIn.value && !mailIn.value){
            nameIn.style="border:solid 1px red";
            mailIn.style="border:solid 1px red";
            nameIn.focus();

        }else if(!mailIn.value){
            mailIn.style="border:solid 1px red";
            mailIn.focus();
        }else{
            nameIn.style="border:solid 1px red";
            nameIn.focus();
        }
    }

    
}
closeBtn.onclick = () => {
    modalFeedback.style="display: none;";
}

window.addEventListener('keydown', function(e){
    if(e.keyCode === 27){
        modalFeedback.style="display: none;";
    }
})