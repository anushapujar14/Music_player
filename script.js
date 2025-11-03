const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const range = document.querySelector("#range") 

let totalSeconds = 0;
setTimeout(()=>{
  totalSeconds = 60 * audio.duration;
  audio.max = (Math.ceil(totalSeconds))
 
}, 3000)
  
let incrementId = 0;

  function Play() 
  {
    if (audio.paused) 
    {
      audio.play();
      incrementId = setInterval(()=>{
        range.value = (audio.currentTime/audio.duration)*100
      },1000)
      playButton.textContent = "⏸"; 
    } 
    else 
    {
      audio.pause();
      clearInterval(incrementId)
      playButton.textContent = "▶";
    }
    
  }
