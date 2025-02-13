const currentUrl = window.location.href;

window.onload = function () {
    new QRCode(document.getElementById("qrcode"), {
        text: currentUrl,
        width: 200,
        height: 200
    });
}