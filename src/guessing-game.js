class GuessingGame {
    constructor(min,max) {
        this.min;
        this.max;
        this.half;
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.half = Math.round((this.max+this.min)/2);
        this.result = this.half;
    }

    guess() {
        return this.result;
    }

    lower() {
        this.max = this.result;
        this.result = Math.round((this.max+ this.min)/2 );
    }

    greater() {
        this.min = this.result;
        this.result = Math.round((this.max + this.min)/2);
    }
}

module.exports = GuessingGame;
