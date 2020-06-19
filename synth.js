class Synth{
    constructor(anker, cols, rows, animation){
        this.parent = document.createElement('div');
        this.parent.className = 'steps';
        this.anker = anker;
        this.cols = cols;
        this.rows = rows;
        this.animation = animation;
        this.positions = [];

        this.bool = [];
        this.duration = 0.1;

        this.attack = 0.2;
        this.decay = 1;
        this.vel = 0.5;


        this.notes = ['C3', 'Eb3', 'G3', 'A3', 'Bb3', 'Eb4', 'F4', 'G4', ]
        
        

        this.steps = [];
        this.labels = [];
        

        for (let i = 0; i < rows; i++){

            this.steps[i] = [];
            this.labels[i] = [];

            const row = document.createElement('div');
            row.className = 'row';

            for (let j = 0; j < cols; j++){
                const step = document.createElement('input');
                const stepLabel = document.createElement('label');
                step.setAttribute('type', 'checkbox');
                step.className = 'step';
                step.id = `step${i}-${j}`;
                stepLabel.setAttribute('for', `step${i}-${j}`);
                row.appendChild(step);
                row.appendChild(stepLabel);
                this.steps[i][j] = step;
                this.labels[i][j] = stepLabel;

            }
            //rows[i] = row;
            this.parent.appendChild(row);            


        }

        this.anker.appendChild(this.parent);

        //this.gain = new Tone.Gain(-0.5).connect(masterGain);


        this.synth = new Tone.PolySynth(Tone.MonoSynth).chain(delay, reverb, masterGain);

        this.synth.set({
            "filter" : {
                "type" : "lowpass",
                
            },
            'oscillator' :{
                'type' : 'sawtooth'
            }
        });


        
    }

    check(c){



        
        for(let i =0; i < this.rows; i++) {
            this.bool[i] = this.steps[i][c].checked;      
                        
        }
        //console.log(this.bool);

    }

    play(time, c){
        
        //let bubble = new Bubble(this.animation, i, c, this);

        for(let i =0; i < this.rows; i++) {
            
            if(this.bool[i]){
                //this.synth.triggerAttackRelease('C3', time, '16n');
                this.synth.triggerAttackRelease(this.notes[i], time, this.duration, this.vel);
                let bubble = new Bubble(this.animation, i, c, this);
            }

        }

    }
    reset(){
        for(let i =0; i< this.rows; i++){
            this.bool[i] = false;
            for (let j = 0; j < this.cols; j++){
                this.steps[i][j].checked = false;

            }
        }
    }
    savePos(){
        for(let i =0; i< this.rows; i++){
            this.positions[i] = [];
            for (let j = 0; j < this.cols; j++){
                const e = this.labels[i][j]
                //console.log(e)
                this.positions[i][j] = offset(e);

            }
        }
        console.log(this.positions);
    }
}