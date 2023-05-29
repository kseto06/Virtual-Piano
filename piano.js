/**
 * VIRTUAL PIANO
 * @author Kaden (Winterlicia) <>
 */

//AudioContext JS Web Audio API -- creating instance
let audioContext;

var C4 = document.getElementById('C4');
var C_sharp4 = document.getElementById('C#4');
var D4 = document.getElementById('D4');
var D_sharp4 = document.getElementById('D#4');
var E4 = document.getElementById('E4');
var F4 = document.getElementById('F4');
var F_sharp4 = document.getElementById('F#4');
var G4 = document.getElementById('G4');
var G_sharp4 = document.getElementById('G#4');
var A4 = document.getElementById('A4');
var B_flat4 = document.getElementById('Bb4')
var B4 = document.getElementById('B4');
var C5 = document.getElementById('C5');

var C_sharp5 = document.getElementById('C#5');
var D5 = document.getElementById('D5');
var D_sharp5 = document.getElementById('D#5');
var E5 = document.getElementById('E5');
var F5 = document.getElementById('F5');
var F_sharp5 = document.getElementById('F#5');
var G5 = document.getElementById('G5');
var G_sharp5 = document.getElementById('G#5');
var A5 = document.getElementById('A5');
var B_flat5 = document.getElementById('Bb5')
var B5 = document.getElementById('B5');
var C6 = document.getElementById('C6');

//4th (Middle) Octave
C4.addEventListener("click", async function(){
    await init();
    await getNote("C4");
});

C_sharp4.addEventListener("click", async function(){
    await init();
    await getNote("C#4");
});

D4.addEventListener("click", async function(){
    await init();
    await getNote("D4");
});

D_sharp4.addEventListener("click", async function(){
    await init();
    await getNote("D#4");
});

E4.addEventListener("click", async function(){
    await init();
    await getNote("E4");
});

F4.addEventListener("click", async function(){
    await init();
    await getNote("F4");
});

F_sharp4.addEventListener("click", async function(){
    await init();
    await getNote("F#4");
});

G4.addEventListener("click", async function(){
    await init();
    await getNote("G4");
});

G_sharp4.addEventListener("click", async function(){
    await init();
    await getNote("G#4");
});

A4.addEventListener("click", async function(){
    await init();
    await getNote("A4");
});

B_flat4.addEventListener("click", async function(){
    await init();
    await getNote("Bb4");
});

B4.addEventListener("click", async function(){
    await init();
    await getNote("B4");
});

C5.addEventListener("click", async function(){
    await init();
    await getNote("C5");
});

//5th Octave
C_sharp5.addEventListener("click", async function(){
    await init();
    await getNote("C#5");
});

D5.addEventListener("click", async function(){
    await init();
    await getNote("D5");
});

D_sharp5.addEventListener("click", async function(){
    await init();
    await getNote("D#5");
});

E5.addEventListener("click", async function(){
    await init();
    await getNote("E5");
});

F5.addEventListener("click", async function(){
    await init();
    await getNote("F5");
});

F_sharp5.addEventListener("click", async function(){
    await init();
    await getNote("F#5");
});

G5.addEventListener("click", async function(){
    await init();
    await getNote("G5");
});

G_sharp5.addEventListener("click", async function(){
    await init();
    await getNote("G#5");
});

A5.addEventListener("click", async function(){
    await init();
    await getNote("A5");
});

B_flat5.addEventListener("click", async function(){
    await init();
    await getNote("Bb5");
});

B5.addEventListener("click", async function(){
    await init();
    await getNote("B5");
});

C6.addEventListener("click", async function(){
    await init();
    await getNote("C6");
});

function getNote(note) {
    init();

    switch (note) {
        case "C4":
            getFile("C4");
            break;
        case "C#4":
            getFile("Db4");
            break;
        case 'D4':
            getFile("D4");
            break;
        case "D#4":
            getFile("Eb4");
            break; 
        case 'E4':
            getFile("E4");
            break;
        case 'F4':
            getFile("F4");
            break;  
        case 'F#4':
            getFile("Gb4");
            break;
        case 'G4':
            getFile('G4');
            break;
        case "G#4":
            getFile("Ab4");
            break;
        case 'A4':
            getFile('A4');
            break;
        case "Bb4":
            getFile("Bb4");
            break;
        case 'B4':
            getFile('B4');
            break;
        case 'C5':
            getFile('C5');
            break;
        case "C#5":
            getFile("Db5");
            break;
        case 'D5':
            getFile("D5");
            break;
        case "D#5":
            getFile("Eb5");
            break; 
        case 'E5':
            getFile("E5");
            break;
        case 'F5':
            getFile("F5");
            break;  
        case 'F#5':
            getFile("Gb5");
            break;
        case 'G5':
            getFile('G5');
            break;
        case "G#5":
            getFile("Ab5");
            break;
        case 'A5':
            getFile('A5');
            break;
        case "Bb5":
            getFile("Bb5");
            break;
        case 'B5':
            getFile('B5');
            break;
        case 'C6':
            getFile('C6');
            break;
        default:
            window.alert("note doesn't exist");
            break;
    }
}

function play(decodedAudio) {
    if (!audioContext) {
        init();
    }
    const playSound = audioContext.createBufferSource();
    playSound.buffer = decodedAudio;
    playSound.connect(audioContext.destination);
    playSound.start(audioContext.currentTime);

    setTimeout(function() {
        playSound.stop();
    }, 1000);
}

function getFile(note) {
    if (!audioContext) {
        init();
    }
    fetch("Note Files\\" + note + ".mp3")
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {
            play(decodedAudio);
        })
        .catch(error => {
            console.error("Error occurred:", error);
            window.alert("Note was unable to be played");
        });
}

function init() {
    audioContext = new AudioContext();
}

function furElise() {
    getFile("E5");
    getFile("Db5");
    getFile("E5");
    getFile("Db5");
    getFile("E5");
    getFile("B4");
    getFile("D5");
    getFile("C5");
    getFile("A4"); //& A3
}

/*

function getFrequency(note, octave) {

    const referenceNote = 440; //Frequency of A4

    const semitones = {
        C: -9,
        'C#': -8,
        Db: -8,
        D: -7,
        'D#': -6,
        Eb: -6,
        E: -5,
        F: -4,
        'F#': -3,
        Gb: -3,
        G: -2,
        'G#': -1,
        Ab: -1,
        A: 0,
        'A#': 1,
        Bb: 1,
        B: 2,
        C5: 3,
    };

    const n = (octave - 4) * 12 + semitones[note.toUpperCase()];
    const frequency = referenceNote * Math.pow(2, n / 12);
    
    return frequency;
}

function playNote(freq) {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = freq;

    oscillator.connect(audioContext.destination);
    oscillator.start();
    
    setTimeout(function() {
        //Timer handler:
        oscillator.stop(); 
    }, 200); //0.5 seconds note length
}
*/
