function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function loadCaptcha() {
    const urlParams = new URLSearchParams(window.location.search);
    const captchaUrl = urlParams.get('url');
    if (captchaUrl) {
        const captchaContainer = document.getElementById('captcha-container');
        const img = document.createElement('img');
        img.src = captchaUrl;
        captchaContainer.appendChild(img);
        setTimeout(() => {
            // Simulate captcha solving
            captchaContainer.innerHTML += '<p>Solved Captcha Text</p>';
        }, 15000);
    }
}

window.onload = loadCaptcha;