"use strict";
var audio = document.getElementById("audio");
var play = document.getElementById("play");
var audioCtx = new AudioContext();
var source;
var player;
audio === null || audio === void 0 ? void 0 : audio.addEventListener("change", function (event) {
    var target = event.target;
    if (target.files && target.files.length) {
        player = new Audio(window.URL.createObjectURL(target.files[0]));
        source = audioCtx.createMediaElementSource(player);
        source.disconnect();
        source.connect(audioCtx.destination);
        if (audioCtx.state === "suspended")
            audioCtx.resume();
    }
});
play === null || play === void 0 ? void 0 : play.addEventListener("click", function () {
    player && player.play();
});
