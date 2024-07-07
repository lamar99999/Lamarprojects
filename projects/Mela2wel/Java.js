const ySong = new Audio("Images/Audio.mp3");
const playBtn = document.getElementById("playBtn");
var playing = false;

function playSong() {
    if(playing == false){
        switchIcon();
        playing = true;
        ySong.play();
    } else {
        switchIcon();
        playing = false;
        ySong.pause();
    }
}

function switchIcon() {
    playBtn.classList.toggle("bi-play-circle");
    playBtn.classList.toggle("bi-pause-circle");
}