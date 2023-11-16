const trackList = {
    "Feel Good" : ["assets/images/album-arts/Feel_Good.png", "assets/music/SKSHHM - Feel Good.wav"],
    "Something Just Like This (SKSHHM Remix)" : ["assets/images/album-arts/Something_Just_Like_This_REMIX.png", "assets/music/sjltremix2.mp3"],
    "Tie Me Down (SKSHHM Remix)" : ["assets/images/album-arts/Tie_Me_Down_REMIX.png", "assets/music/Gryffin - Tie Me Down (ft. Elley Duhé) (SKSHHM Remix).mp3"],
    "Used To Love (SKSHHM Remix)" : ["assets/images/album-arts/Used_To_Love_REMIX.png", "assets/music/anothergoodmelody2.0_2.mp3"],
    "Andromeda" : ["assets/images/album-arts/Andromeda.png", "assets/music/SKSHHM - Andromeda.mp3"],
    "Lyra" : ["assets/images/album-arts/Lyra.png", "assets/music/SKSHHM - Lyra.mp3"],
    "Orion" : ["assets/images/album-arts/Orion.png", "assets/music/SKSHHM - Orion.mp3"],
    "Heartbreak" : ["assets/images/album-arts/Heartbreak.png", "assets/music/SKSHHM - Heartbreak (Future Bounce).wav"],
    "Dreams" : ["assets/images/album-arts/Dreams.png", "assets/music/Dreams.mp3"],
};

const trackListElement = document.getElementsByClassName("track-list")[0];

Object.entries(trackList).forEach(([k,v]) => {
    var item = document.createElement("li");
    item.classList.add("list-group-item", "list-group-item-action")
    item.textContent = k;
    trackListElement.appendChild(item);
})

const albumArtImage = document.getElementById("album-art-image");
const trackName = document.getElementById("track-title-text");
// const playerStatus = document.getElementById("player-status");

var audio = document.getElementsByTagName('audio')[0];

trackListElement.childNodes.forEach(function(element, i)  {
    element.addEventListener('click', ()=>{
        var previous = document.getElementsByClassName("active");
        if (previous.length > 0) {
            previous[0].className = previous[0].className.replace(" active", "");
        }
        // var length = new Date(trackList[element.textContent][0] * 1000).toISOString().substring(14, 19)
        element.className += " active";
        albumArtImage.src = trackList[element.textContent][0];
        // albumArtImage.parentElement.style.backgroundImage = `url(${trackList[element.textContent][0]})`;
        trackName.textContent = Object.keys(trackList)[i-1] + " • " + length;
        element.classList.add("active");
        audio.pause();
        audio.src = trackList[element.textContent][1];
        audio.play();
    }, true)
});
audio.addEventListener('durationchange', ()=>{
    var length = new Date(audio.duration * 1000).toISOString().substring(14, 19)
    trackName.textContent = trackName.textContent.split(" • ")[0] + " • " + length;
    
})
// document.getElementById('player-button').addEventListener('click', togglePlayerStatus);
albumArtImage.addEventListener('click', togglePlayerStatus);
const pauseButton = document.getElementById('pause');

function togglePlayerStatus(){
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
}