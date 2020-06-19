cols = 16;
rows = 8;
let $steps;
let speed = 16;
let bpm = 120;
let swing = 0;
let dWet = 0;
let rWet = 0;


let c = 0;

const masterGain = new Tone.Gain(0.5).toMaster();
var reverb = new Tone.Reverb(5);

var loop = new Tone.Loop(song, `${speed}n`);
var delay = new Tone.PingPongDelay('8n.');
delay.wet.value = dWet;
reverb.wet.value = rWet;



function setup() {
    setupDom();
    $steps = document.getElementById('steps');
    synth = new Synth($steps, cols, rows, $animation);
    synth.savePos();
    Tone.start();
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.start();
    loop.start(0);
}


function song(time) {

    c %= cols;

    //console.log(c);
    synth.check(c);
    synth.play(time, c);
    let bub = new Bubble($animation, 0, c, synth);

    c++
}


function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}