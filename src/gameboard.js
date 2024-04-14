import Ship from "./ship";

class GameBoard {
    constructor() {
        this.board = this.#getBoard();
        this.ships = [];
    }

    #getBoard() {
        let board = [];
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                board[i][j] = {ship: null, hit: false};
            }
        }

        return board;
    }

    placeShip(ship, dir, x, y) {
        let originX = x;
        let originY = y;

        for (let i = 0; i < ship.length; i++) {
            dir == "x" ? x += 1 : y += 1;

            if (x > 9 || x < 0 || y > 9 || y < 0) {
                return false;
            }

            if (this.board[x][y].ship != null) {
                return false
            }
        }
        
        x = originX;
        y = originY;

        for (let i = 0; i < ship.length; i++) {
            dir == "x" ? x += 1 : y += 1;
            
            this.board[x][y].ship = ship;
        }

        this.ships.push(ship);

        return true;
    }

    receiveAttack(x, y) {
        if (x > 9 || x < 0 || y > 9 || y < 0) {
            return false;
        } else if (this.board[x][y].hit) {
            return false;
        }

        if (this.board[x][y].ship != null) {
            this.board[x][y].ship.hit();
            this.board[x][y].hit = true;
            return "hit";
        } else if (this.board[x][y].ship == null) {
            this.board[x][y].hit = true;
            return "miss";
        }
    }

    checkGameEnd() {
        console.log(this.ships);
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].isSunk()) {
                return false;
            }
        }

        return true;
    }
}

export default GameBoard;