"use strict";

/*****************

Music Box
Pippin Barr

A simple example of procedural music generation using Pizzicato's
synthesis and soundfile playing abilities.

******************/

// Time for one note
const NOTE_TEMPO = 500;
// Time for one beat
const DRUM_TEMPO = 250;
// Attack time for a note (in seconds)
const ATTACK = 0.1;
// Release time for a note (in seconds)
const RELEASE = 0.1;

// We need an array of the possible notes to play as frequencies (in Hz)
// A Major =  A, B, C♯, D, E, F♯, and G♯
// We can get the frequencies of these notes from THE INTERNET, e.g.
// http://pages.mtu.edu/~suits/notefreqs.html
let frequencies = [
    220, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30
];
// The synth
let synth;
// The sound files
let kick;
let snare;
let hihat;
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = hihat
let pattern = ['*', 'x', 'ox*', ' ', '*', 'x', 'xo', '*'];
// Which beat of the pattern we're at right now
let patternIndex = 0;


let play1 = true;

/// background color
let amt, startColor, newColor;


// setup()
//
// Creat canvas, set up the synth and sound files.
function setup() {
    createCanvas(windowWidth, windowHeight);
    startColor = color(255,255,255);
      newColor = color(random(255),random(255),random(255));
      amt = 0;

      background(startColor);


    // Create the synth
    synth = new Pizzicato.Sound({
        source: 'wave',
        options: {
            type: 'sine',
            attack: ATTACK,
            release: RELEASE,
            frequency: 220
        }
    });
    ///// NEW EFFECT QUADRFUZZ
    let quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
        lowGain: 1,
        midLowGain: 1,
        midHighGain: 0.5,
        highGain: 0.6,
        mix: 1.0
    });

    synth.addEffect(quadrafuzz);

    //// END OF NEW EFFECT

    // Load the three drum sounds as wav files
    kick = new Pizzicato.Sound({
        source: 'file',
        options: {
            path: 'assets/sounds/kick.wav'
        }
    });

    snare = new Pizzicato.Sound({
        source: 'file',
        options: {
            path: 'assets/sounds/snare.wav'
        }
    });

    hihat = new Pizzicato.Sound({
        source: 'file',
        options: {
            path: 'assets/sounds/hihat.wav'
        }

    });

    let delay = new Pizzicato.Effects.Delay();
    hihat.addEffect(delay);
}
// mousePressed
//
// Using this to start the note and drum sequences to get around
// user interaction (and to give the files time to load)
function mousePressed() {

    if (play1 === true) {

        playSynth();

        // Start an interval for the notes
        setInterval(playNote, NOTE_TEMPO);
        // Start an interval for the drums
        setInterval(playDrum, DRUM_TEMPO);
        play1 = false;

    }
}
// playNote
//
// Chooses a random frequency and assigns it to the synth
function playNote() {
    // Pick a random frequency from the array
    let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    // Set the synth's frequency
    synth.frequency = frequency;
    // If it's note already play, play the synth
    let synthPause = Math.random();
    if (synthPause > 0.3) {
        synth.play();
    } else {
        synth.stop();
    }
    playSynth.attack = mouseX / 720 * 0.5;
    playSynth.release = mouseY / 400;
    synthPause = 500 * Math.floor(Math.random() * 4);
    setTimeout(500);
}

// playDrum()
//
// Checks the string representing the drums for the current beat
// and plays the appropriate sounds
function playDrum() {
    // Get the symbols for the current beat in the pattern
    let symbols = pattern[patternIndex];

    // If there's an 'x' in there, play the kick
    if (symbols.indexOf('x') !== -1) {
        kick.play();
    }
    // If there's an 'o' in there, play the snare
    if (symbols.indexOf('o') !== -1) {
        snare.play();
    }
    // If there's an '*' in there, play the hihat
    if (symbols.indexOf('*') !== -1) {
        hihat.play();
    }
    // Advance the pattern by a beat
    patternIndex = (patternIndex + 1) % pattern.length;


}



function playSynth() {
    let duration = Math.ceil(Math.random() * 5) * NOTE_TEMPO;
    // console.log(duration);
    setTimeout(playSynth, duration);
    playNote();
}
// draw()
//
// Nothing right now.

function draw() {
  background(lerpColor(startColor, newColor, amt));
   amt += 0.01;
   if(amt >= 1){
     amt = 0.0;
     startColor = newColor;
     newColor = color(random(255),random(255),random(255));
   }
}
