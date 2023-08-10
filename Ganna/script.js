console.log("Welcome to Ganna");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let giff = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Samjhawan", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Roke Na Roke Naina", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Yeh Dooriyan", filePath: "songs/3.mp3",coverPath: "covers/3.jfif"},
    {songName: "Apna Bana Le", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Maan meri jaan", filePath: "songs/5.mp3",coverPath: "covers/5.jfif"},
    {songName: "Tere vaste", filePath: "songs/6.mp3",coverPath: "covers/6.webp"},
    {songName: "Tu hai to muje phir or kia chyiye", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Hai Tamanna", filePath: "songs/8.mp3",coverPath: "covers/8.webp"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
 
masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    giff.style.opacity = 1;
   }
   else{
       audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       giff.style.opacity = 0;
   }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
  })
}   

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
    //   masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
     })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
