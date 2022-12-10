var Aufgabe_8;
(function (Aufgabe_8) {
    var Sounds = [
        "./Drumpad/kick.mp3",
        "./DrumPad/snare.mp3",
        "./DrumPad/hihat.mp3",
        "./DrumPad/C.mp3",
        "./DrumPad/F.mp3",
        "./DrumPad/G.mp3",
        "./DrumPad/A.mp3",
        "./DrumPad/laugh-1.mp3",
        "./DrumPad/laugh-2.mp3",
    ];
    var beat = [
        0, 2, 2, 1, 2, 0, 1, 2
    ];
    var zaehler = 0;
    var interval = 0;
    window.addEventListener("load", addClickListenersDrumPad);
    //Pad
    function playSample(soundQuelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
    }
    //Remix
    function Remix() {
        let len = beat.length;
        beat = [];
        for (var r = 0; r < len; r++) {
            beat.push(Math.floor(Math.random() * 3)); // Sounds.length
        }
    }
    //Play
    function playBeat() {
        playSample(Sounds[beat[zaehler]]);
        zaehler++;
        if (zaehler >= beat.length)
            zaehler = 0;
    }
    function addClickListenersDrumPad() {
        for (var i = 0; i < Sounds.length; i++) {
            let pad = ".pad-" + (i + 1);
            if (document.querySelector(pad)) {
                let sample = Sounds[i];
                document.querySelector(pad).addEventListener("click", (event) => { playSample(sample); });
            }
        }
        document.querySelector(".play").addEventListener("click", (event) => {
            clearInterval(interval);
            zaehler = 0;
            interval = setInterval(playBeat, 350);
        });
        document.querySelector(".stop").addEventListener("click", (event) => {
            clearInterval(interval);
            zaehler = 0;
        });
        document.querySelector(".remix").addEventListener("click", (event) => {
            clearInterval(interval);
            zaehler = 0;
            Remix();
            interval = setInterval(playBeat, 350);
        });
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=main.js.map