let synth;

let $sliders ,$btns;

let cols = 16;
let rows = 8;

let $animation;

function setupDom(){

    $animation = document.getElementById('animation');
    
    

    $sliders = document.querySelectorAll('.input');
    $sliders.forEach((slider, index) => {
        slider.addEventListener('change', (e) => {
            switch(index){
                case 0:
                    //BPM
                    bpm = e.target.value;
                    Tone.Transport.bpm.rampTo(bpm, 0.1);
                    break;

                case 1:
                    //Swing
                    swing = (e.target.value/100)*0.7;
                    Tone.Transport.swing.value = swing;
                    break;

                case 2:
                    //Delay
                    dWet = (e.target.value/100)*0.7;
                    delay.wet.value = dWet;
                    break;

                case 3:
                    //REverb
                    rWet = (e.target.value/100)*0.7;
                    reverb.wet.value = rWet;
                    
                    break;

                case 4:
                    //Duration
                    
                    let d = (e.target.value/100)+0.01;
                    synth.duration = d;
                    break

                
                case 5:
                    //freq
                    
                    let fr = e.target.value * 52 + 100;
                    synth.synth.set({
                        "filterEnvelope" : {
                            "baseFrequency" : fr
                        }
                    });
                    break
                case 6:
                    //amount
                    
                    let am = e.target.value*10/100;
                    synth.synth.set({
                        "filterEnvelope" : {
                            "exponent" : am
                        }
                    });
                    break;
                case 7:
                    //amount
                    
                    let g = e.target.value/100;
                    synth.vel = g;
                    
                    
            }

            


        })


        $btns = document.querySelectorAll('.transport i');
            //console.log($btns);
            $btns.forEach((btn, index) => {
                btn.addEventListener('click', (e) => {
                    //console.log(e);
                    switch(index){
                        case 0:
                            Tone.Transport.start();
                            break;

                        case 1:
                            Tone.Transport.pause();
                            break;

                        case 2:
                            Tone.Transport.stop();
                            synth.reset();
                    }
                })
            })

    })
}