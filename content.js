function clickCaptchaCheckbox() {

    let iframe = document.querySelector('iframe[src*="recaptcha"]');

    if (iframe) {
        console.log("Captcha detected");

        let iframeDoc = iframe.contentWindow.document;

        let checkbox = iframeDoc.querySelector("#recaptcha-anchor");

        if (checkbox) {
            checkbox.click();
            console.log("Clicked I'm not a robot");
        }
    }
}

function clickBuster() {

    let busterButton = document.querySelector(".help-button-holder");

    if (busterButton) {
        console.log("Clicking Buster Solver");
        busterButton.click();
    }
}

function goNextPage() {

    let nextButton = document.querySelector("#pnnext");

    if (nextButton) {

        console.log("Next page in 5 seconds...");

        setTimeout(function () {
            nextButton.click();
        }, 5000);
    }
}

function detectCaptcha() {

    if (document.body.innerText.includes("I'm not a robot") ||
        document.body.innerText.includes("Select all images")) {

        console.log("Captcha page detected");

        clickCaptchaCheckbox();

        setTimeout(function () {
            clickBuster();
        }, 4000);
    }
}

setInterval(function () {

    detectCaptcha();
    goNextPage();

}, 6000);