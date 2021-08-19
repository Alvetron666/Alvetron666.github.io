"use sctrict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('callback-form');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);

        
            let response = await fetch('/../php/mailCallback.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                // formPreview.innerHTML = '';
                form.reset();
            } else {
                alert('Ошибка');
            }
   
    }
});