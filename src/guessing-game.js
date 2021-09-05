class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.isLower = null;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.isLower == null) {
            this.result = Math.ceil((this.max + this.min) / 2);
            return this.result;
        }
        if (this.isLower == true) {
            this.max = this.result;
            this.result = Math.ceil((this.min + this.max) / 2);
            return this.result;
        }
        if (this.isLower == false) {
            this.min = this.result;
            this.result = Math.ceil((this.max + this.min) / 2);
            return this.result;
        }
    }

    lower() {
        this.isLower = true;
    }

    greater() {
        this.isLower = false;
    }
}

const game = new GuessingGame();
game.setRange(0, 7340)
let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
module.exports = GuessingGame;
