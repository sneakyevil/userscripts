// ==UserScript==
// @name         Youtube (Shorts) - Media Controls, Auto Scroll
// @version      1.0
// @description  -
// @author       sneakyevil
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

function PreviousVideo()
{
    let _KeyEvent = new KeyboardEvent('keydown', {
        key: "ArrowUp",
        keyCode: 38,
        which: 38,
        code: "ArrowUp"
    });

    document.dispatchEvent(_KeyEvent);
}

function NextVideo()
{
    let _KeyEvent = new KeyboardEvent('keydown', {
        key: "ArrowDown",
        keyCode: 40,
        which: 40,
        code: "ArrowDown"
    });

    document.dispatchEvent(_KeyEvent);
}

setInterval(function() {
    let _VideoStream = document.getElementsByClassName("video-stream")[0];
    if (_VideoStream) {
        _VideoStream.loop = false;
        _VideoStream.onended = NextVideo;
    }

    if ("mediaSession" in navigator)
    {
        navigator.mediaSession.setActionHandler("previoustrack", function() {
            PreviousVideo();
        });

        navigator.mediaSession.setActionHandler("nexttrack", function() {
            NextVideo();
        });
    }
}, 1000);
