class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (sunk) {
            return false;
        }

        this.hits++;
        return true;
    }

    isSunk() {
        return this.sunk;
    }
}

module.exports = Ship;