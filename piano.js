/**
 * VIRTUAL PIANO
 * @author Kaden (Winterlicia) <>
 */

//AudioContext JS Web Audio API -- creating instance
let audioContext;
const audioDataArray = [];

var C3 = document.getElementById('C3');
var C_sharp3 = document.getElementById('C#3');
var D3 = document.getElementById('D3');
var D_sharp3 = document.getElementById('D#3');
var E3 = document.getElementById('E3');
var F3 = document.getElementById('F3');
var F_sharp3 = document.getElementById('F#3');
var G3 = document.getElementById('G3');
var G_sharp3 = document.getElementById('G#3');
var A3 = document.getElementById('A3');
var B_flat3 = document.getElementById('Bb3')
var B3 = document.getElementById('B3');

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

getFile();

//3rd (Low) Octave
C3.addEventListener("click", async function(){
    await init();
    await play("C3");
});

C_sharp3.addEventListener("click", async function(){
    await init();
    await play("Db3");
});

D3.addEventListener("click", async function(){
    await init();
    await play("D3");
});

D_sharp3.addEventListener("click", async function(){
    await init();
    await play("Eb3");
});

E3.addEventListener("click", async function(){
    await init();
    await play("E3");
});

F3.addEventListener("click", async function(){
    await init();
    await play("F3");
});

F_sharp3.addEventListener("click", async function(){
    await init();
    await play("Gb3");
});

G3.addEventListener("click", async function(){
    await init();
    await play("G3");
});

G_sharp3.addEventListener("click", async function(){
    await init();
    await play("Ab3");
});

A3.addEventListener("click", async function(){
    await init();
    await play("A3");
});

B_flat3.addEventListener("click", async function(){
    await init();
    await play("Bb3");
});

B3.addEventListener("click", async function(){
    await init();
    await play("B3");
});

//4th (Middle) Octave
C4.addEventListener("click", async function(){
    await init();
    await play("C4");
    console.log("C played")
});

C_sharp4.addEventListener("click", async function(){
    await init();
    await play("Db4");
});

D4.addEventListener("click", async function(){
    await init();
    await play("D4");
});

D_sharp4.addEventListener("click", async function(){
    await init();
    await play("Eb4");
});

E4.addEventListener("click", async function(){
    await init();
    await play("E4");
});

F4.addEventListener("click", async function(){
    await init();
    await play("F4");
});

F_sharp4.addEventListener("click", async function(){
    await init();
    await play("Gb4");
});

G4.addEventListener("click", async function(){
    await init();
    await play("G4");
});

G_sharp4.addEventListener("click", async function(){
    await init();
    await play("Ab4");
});

A4.addEventListener("click", async function(){
    await init();
    await play("A4");
});

B_flat4.addEventListener("click", async function(){
    await init();
    await play("Bb4");
});

B4.addEventListener("click", async function(){
    await init();
    await play("B4");
});

C5.addEventListener("click", async function(){
    await init();
    await play("C5");
});

//5th (High) Octave
C_sharp5.addEventListener("click", async function(){
    await init();
    await play("Db5");
});

D5.addEventListener("click", async function(){
    await init();
    await play("D5");
});

D_sharp5.addEventListener("click", async function(){
    await init();
    await play("Eb5");
});

E5.addEventListener("click", async function(){
    await init();
    await play("E5");
});

F5.addEventListener("click", async function(){
    await init();
    await play("F5");
});

F_sharp5.addEventListener("click", async function(){
    await init();
    await play("Gb5");
});

G5.addEventListener("click", async function(){
    await init();
    await play("G5");
});

G_sharp5.addEventListener("click", async function(){
    await init();
    await play("Ab5");
});

A5.addEventListener("click", async function(){
    await init();
    await play("A5");
});

B_flat5.addEventListener("click", async function(){
    await init();
    await play("Bb5");
});

B5.addEventListener("click", async function(){
    await init();
    await play("B5");
});

C6.addEventListener("click", async function(){
    await init();
    await play("C6");
});

function play(inputNote) {
    if (!audioContext) {
        init();
    }

    //Search for the note in the audioDataArray:
    const foundNote = audioDataArray.find(item => item.note === inputNote);

    if (foundNote) {
        decodedAudio = foundNote.decodedAudio;

        playSound = audioContext.createBufferSource();
        playSound.buffer = decodedAudio;
        playSound.connect(audioContext.destination);
        playSound.start(audioContext.currentTime);

        // Calculate the duration of the note and add a small extra time for a smoother release
        const duration = decodedAudio.duration + 0.5;

        setTimeout(function() {
            playSound.stop();
            playSound.disconnect(); //Clear resources?
        }, duration * 1000);
    } else {
        console.error(inputNote, "not found in data array");
    }
}

//Get all note files
function getFile() {
    if (!audioContext) {
        init();
    }

    const noteList = returnNoteList();
    console.log(noteList);

    for (let i = 0; i < noteList.length; i++) {
        let note = noteList[i];
        // Check if the decoded audio data for the note is already available
        if (audioDataArray[i]) {
            console.log(note, "already exists");
            return;
        }

        //If note not available, fetch it:
        fetch("Note Files\\" + note + ".mp3")
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(decodedAudio => { 
              //Store object of the note name and its decoded audio:
                audioDataArray[i] = {
                    note: note,
                    decodedAudio: decodedAudio
                };
        })
        .catch(error => {
            console.error("Error occurred:", error);
            window.alert("Note was unable to be played");
        });
    }
}

function init() {
    audioContext = new AudioContext();
}

//Helper function to convert the note into an array index
function returnNoteList() {
    const noteNames = ["A", "Ab", "B", "Bb", "C", "D", "Db", "E", "Eb", "F", "G", "Gb"];
    const octave = ['3', '4', '5'];
    const noteList = [];

    for (let i = 0; i < noteNames.length; i++) {
        for (let j = 0; j < octave.length; j++) {
            noteList.push(noteNames[i] + octave[j]);
        }
    }

    noteList.push("C6");

    return noteList;

}