let progress=document.getElementById("progress");
let song=document.getElementById("song");
let pauseicon=document.getElementById("pauseicon");
// let prev=document.getElementById("prev");
// let forw=document.getElementById("forw");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;

}

function playpause(){
    if(pauseicon.classList.contains("fa-pause"))
    {
        song.pause();
        pauseicon.classList.remove("fa-pause");
        pauseicon.classList.add("fa-play");
    }
    else{
        song.play();
        pauseicon.classList.add("fa-pause");
        pauseicon.classList.remove("fa-play");
    }
}


if(song.pause()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}

progress.onchange = function (){
    song.play()
    song.currentTime=progress.value;
    pauseicon.classList.add("fa-pause");
    pauseicon.classList.remove("fa-play");
}




