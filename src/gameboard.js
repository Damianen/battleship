class GameBoard {
    constructor() {
        this.board = this.#getBoard();
        this.ships = [];
    }

    #getBoard() {
        let board = [];
        for (let i = 0; i < 10; i++) {
            board.push([]);
            for (let j = 0; j < 10; j++) {
                board[i].push({ship: null, hit: false});
            }
        }
        return board;
    }

    placeShip(ship, dir, x, y) {
        for (let i = 0; i < ship.length; i++) {
            dir == "x" ? x += i : y += i;

            if (x > 9 || x < 0 || y > 9 || y < 0) {
                return false;
            }

            if (this.board[x][y].ship != null) {
                return false
            }
        }
        
        for (let i = 0; i < ship.length; i++) {
            dir == "x" ? x += i : y += i;
            this.board[x][y].ship = ship;
            this.ships.push(ship);
        }
    }

    receiveAttack(x, y) {
        if (x > 9 || x < 0 || y > 9 || y < 0) {
            return new Error("Out of bounce!");
        } else if (this.board[x][y].hit) {
            return new Error("Already shit this coord!");
        }

        if (this.board[x][y].ship != null) {
            this.board[x][y].ship.hit();
            this.board[x][y].hit = true;
            return true;
        } else if (this.board[x][y].ship == null) {
            this.board[x][y].hit = true;
            return false;
        }
    }

    checkGameEnd() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].isSunk()) {
                return false;
            }
        }

        return true;
    }
}