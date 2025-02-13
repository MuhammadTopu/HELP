const iframe = document.getElementById("videoFrame");
const h1 = document.getElementById("hONE");

const vimeoUrls = {
    windows: "https://player.vimeo.com/video/1056405203?h=86912f7c0d&background=1",
    mac: "https://player.vimeo.com/video/1056405488?h=870df0314f&background=1"
};

function playVideo() {
    iframe.contentWindow.postMessage('{"method":"play"}', "*");
}

function pauseVideo() {
    iframe.contentWindow.postMessage('{"method":"pause"}', "*");
}

function muteVideo() {
    iframe.contentWindow.postMessage('{"method":"setVolume","value":0}', "*");
}

function unmuteVideo() {
    iframe.contentWindow.postMessage('{"method":"setVolume","value":1}', "*");
}

function seekForward() {
    iframe.contentWindow.postMessage('{"method":"seekTo","value":10}', "*");
}

function seekBackward() {
    iframe.contentWindow.postMessage('{"method":"seekTo","value":-10}', "*");
}

function mac() {
    iframe.src = vimeoUrls.mac;
    h1.innerHTML = "SQL Installation for MAC";
}

function win() {
    iframe.src = vimeoUrls.windows;
    h1.innerHTML = "SQL Installation for Windows";
}
