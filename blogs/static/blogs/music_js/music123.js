var play = document.getElementById('play');

playing_song = document.getElementById('my-song');

play.addEventListener('click', () =>{
    if(playing_song.paused){
        playing_song.play();
        play.src = "https://img.icons8.com/flat-round/50/000000/pause--v1.png";
    }
    else{
        playing_song.pause();
        play.src = "https://img.icons8.com/flat-round/50/000000/play--v1.png";
    }
});



// burger

var burger = document.querySelector(".burger");
var blog_nav = document.querySelector(".blog-nav");
var music = document.querySelector(".music");
var resp = document.querySelector(".resp");

burger.addEventListener('click', () =>{
    blog_nav.classList.toggle("nav-blog");
    resp.classList.toggle("none");
    music.classList.toggle("body-tech");
});