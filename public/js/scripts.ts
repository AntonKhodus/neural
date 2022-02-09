const audio = document.getElementById("audio");
const play = document.getElementById("play");
const audioCtx = new AudioContext();
let source: MediaElementAudioSourceNode;
let player: HTMLAudioElement;

audio?.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length) {
        player = new Audio(window.URL.createObjectURL(target.files[0]));
        source = audioCtx.createMediaElementSource(player);
        source.disconnect();
        source.connect(audioCtx.destination);
        if(audioCtx.state === "suspended") audioCtx.resume();
    }
});

play?.addEventListener("click", () => {
    player && player.play();
})