"use sctrict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('modal-participate');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);

        
            let response = await fetch('/../../php/mail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
            } else {
                alert('ff');
            }
   
    }
});