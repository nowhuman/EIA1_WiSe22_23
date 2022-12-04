namespace Aufgabe_8{
  
var Sounds: string [] = [("./DrumPad/A.mp3"), ("./DrumPad/C.mp3"), ("./DrumPad/F.mp3"), ("./DrumPad/G.mp3"), 
("./DrumPad/hihat.mp3"), ("./Drumpad/kick.mp3"), ("./DrumPad/laugh-1.mp3"), ("./DrumPad/laugh-2.mp3"), 
("./DrumPad/snare.mp3")];

var beat: string []= [Sounds [4], Sounds [5], Sounds [7]];
console.log("hex"); 
var zaehler: number = 0;
var beatremix: number;
var interval: number = 0 ;


//Funktionen// 

window.addEventListener("load", addClickListenersDrumPad);


//Pads//
    function playSample(soundQuelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
     }

//Remix//
    function REMIX (): void {

    clearInterval (interval);
    clearInterval(beatremix);

    if (document.querySelector("#stop").getAttribute("class") == "far fa-stop") {
        document.querySelector("#play").setAttribute("class", "far fa-play");
    }

    beat = [];
    for (var r: number = 0; r < 5; r++) {
      beat.push(Sounds[Math.ceil(Math.random() * 6)]);
    }
    beatremix = setInterval (playRemix, 300);


    function playRemix(): void {
            playSample (beat[zaehler]);
            zaehler++;
            if (zaehler == 6) { zaehler = 0; }
        }
  }

//Playbutton//

function playBeat(audio: string): void {
    var beat: HTMLAudioElement = new Audio (audio);
    beat.loop = true;


    if (document.getElementById("play").classList.contains("fa-play")) {
      document.getElementById("play").classList.remove("fa-play");
      document.getElementById("play").classList.add("fa-stop");
      interval = setInterval (tonbeat, 350);

  }
    else {
      document.getElementById("play").classList.remove("fa-stop");
      document.getElementById("play").classList.add("fa-play");
      clearInterval(interval);

  }

    function tonbeat(): void {
    playSample(beat[zaehler]);
    zaehler++;
    if (zaehler == 2) { zaehler = 0; } 
  }
  }

    function addClickListenersDrumPad(): void {

        document.querySelector(".pad-1").addEventListener("click", function(): void {playSample(Sounds[0]); });
        document.querySelector(".pad-2").addEventListener("click", function(): void {playSample(Sounds[1]); });
        document.querySelector(".pad-3").addEventListener("click", function(): void {playSample(Sounds[2]); });
        document.querySelector(".pad-4").addEventListener("click", function(): void {playSample(Sounds[3]); });
        document.querySelector(".pad-5").addEventListener("click", function(): void {playSample(Sounds[4]); });
        document.querySelector(".pad-6").addEventListener("click", function(): void {playSample(Sounds[5]); });
        document.querySelector(".pad-7").addEventListener("click", function(): void {playSample(Sounds[6]); });
        document.querySelector(".pad-8").addEventListener("click", function(): void {playSample(Sounds [7]); });
        document.querySelector(".pad-9").addEventListener("click", function(): void {playSample(Sounds[8]); });

        document.querySelector("#play").addEventListener("click", function(): void {playBeat(beat[0]); });
        document.querySelector("#play").addEventListener("click", function(): void {playBeat(beat[1]); });
        document.querySelector("#play").addEventListener("click", function(): void {playBeat(beat[2]); });
        document.querySelector("#remix").addEventListener("click", function (): void {REMIX(); });

     }
    }