
class Bubble{
    constructor(anker, row, col, synth){
        this.anker = anker;
        this.row = row;
        this.col = col;
        this.synth = synth;

        this.el = document.createElement('div');
        this.el.className = 'bubble';

        this.left = 500;
        this.top = 200;

        
        this.offset = this.synth.positions[row] [col];
        
        //console.log(this.offset);
        this.left = Math.round(this.offset.left);
        this.top = Math.round(this.offset.top);
        this.el.style.position = 'absolute';
        this.el.style.left = `${this.left}px`;
        this.el.style.top = `${this.top}px`;
        
        this.el.style.background = colors[row*col];

        this.anker.appendChild(this.el);
        this.el.style.animation = 'bubble 0.5s ease';

        this.el.addEventListener('animationend', (e) => {
            this.anker.removeChild(this.el);
        })

    }

    play(){

    }
}