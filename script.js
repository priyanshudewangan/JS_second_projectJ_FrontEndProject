document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.subscribe');
    const emailInput = document.querySelector('.email-input');



    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            if (!emailInput.value) {
                alert('Add email');
            }
            if (emailInput.value) {
                localStorage.setItem('userEmail', emailInput.value);
                window.location.href = 'next.html';
            }
        });
    }

    const dismissBttn = document.getElementById('dismiss');
    if (dismissBttn) {
        dismissBttn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }


    const spanEmail = document.querySelector('.span1');
    const emailStorage = localStorage.getItem('userEmail');

    if (spanEmail && emailStorage) {
        spanEmail.textContent = emailStorage;
    }

});

