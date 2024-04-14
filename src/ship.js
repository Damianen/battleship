class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.sunk) {
            return false;
        }

        this.hits++;
        if (this.hits == this.length) {
            this.sunk = true;
        }

        return true;
    }

    isSunk() {
        return this.sunk;
    }
}

export default Ship;