const PLAYER_WRAPPER = document.getElementsByClassName("player");
const HTML5_PLAYER = document.querySelector(".viewer");
const PROGRESS_BAR = document.querySelector(".progress__filled");
const PROGRESS_BACKGROUND = document.querySelector(".progress");
const PLAYPAUSE_BUTTON = document.querySelector(".player__button.toggle");
let isLeftMouseButtonDown = false;

function setMouseButtonDown(isButtonDown){
    isLeftMouseButtonDown = isButtonDown;
}

function setPlayPauseIcon(isPlayerPaused, button){
    if(isPlayerPaused){
        button.innerHTML = "►";
    }else {
        button.innerHTML = "||";
    }
}

function playpause(){


    if(HTML5_PLAYER.paused){
        HTML5_PLAYER.play();
    }else {
        HTML5_PLAYER.pause();
    }


}

function playpauseButton() {

    playpause();
    setPlayPauseIcon(HTML5_PLAYER.paused, PLAYPAUSE_BUTTON);
}



function setVolume(event){

    const slider = event.target;
    HTML5_PLAYER.volume = slider.value;
}

function setPlaybackRate(event){

    const slider = event.target;
    HTML5_PLAYER.playbackRate = slider.value;

}

function setProgressBar(){

    const progress = (HTML5_PLAYER.currentTime / HTML5_PLAYER.duration) * 100
    PROGRESS_BAR.style.flexBasis = `${progress}%`;
}

function setProgressBarOnDrag(event){
    if(isLeftMouseButtonDown){
        scrub(event);
    }

}

function scrub(event){
    const scrubToPercent = event.offsetX / PROGRESS_BACKGROUND.offsetWidth;
    const percentAsTime = scrubToPercent * HTML5_PLAYER.duration;

    HTML5_PLAYER.currentTime = percentAsTime;
}

function setCurrentTime(timeToSet){
    HTML5_PLAYER.fastSeek(timeToSet);
}

function skipBackwards (secondsToSkip){
    const currentTime = HTML5_PLAYER.currentTime;
    setCurrentTime(currentTime - secondsToSkip);

}

function skipForwards (secondsToSkip){
    const currentTime = HTML5_PLAYER.currentTime;
    setCurrentTime(currentTime + secondsToSkip);

}