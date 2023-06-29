'use strict'


const menuSize = '260px';

let open = true;


document.querySelector('.btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('.btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}

// Grab ID of audio player
var podcastAudio = document.getElementById('podcast-audio');

// Grab ID of play button
var playBtn = document.getElementById('podcast-play');

// Grab ID of pause button
var pauseBtn = document.getElementById('podcast-pause');

// Play audio & show pause btn
var playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & show play btn
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};