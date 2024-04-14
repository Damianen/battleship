import Player from "./player";
import Ship from "./ship";
import GameBoard from "./gameboard";
import DomManipulator from "./DOM";

class Game {
    constructor(ai) {
        this.player1 = new Player(false);
        this.player2 = new Player(ai);
        this.gameEnd = false;
    }

    start() {
        this.#setup(this.player1);
        this.#setup(this.player2);
    }

    #setup(player) {
        for (let i = 2; i < 6; i++) {
            let ship = new Ship(i);
            let valid = false;
            while (!valid) {
                let dir = "";
                Math.floor(Math.random() * 2) == 1 ? dir += "x" : dir += "y";
                valid = player.board.placeShip(ship, dir, 
                    Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            }
            
        }
    }

    nextTurn(x, y) {
        let hit = this.player2.board.receiveAttack(x, y);
        if (hit === "hit") {
            DomManipulator.addPlayerHit(x, y);
        } else if (hit === "miss"){
            DomManipulator.addPlayerMiss(x, y);
        }
        
        let endPlayer = this.player2.board.checkGameEnd();
        if (endPlayer) {
            DomManipulator.endGame("player", this.player2.board);
        }

        let hit1 = false;
        let coords = this.player2.makeTurn();
        while (!hit1) {
            coords = this.player2.makeTurn();
            hit1 = this.player1.board.receiveAttack(coords.x, coords.y);
        }
        
        if (hit1 === "hit") {
            DomManipulator.addEnemyHit(coords.x, coords.y);
        } else if (hit1 === "miss") {
            DomManipulator.addEnemyMiss(coords.x, coords.y);
        }
        

        let endComputer = this.player1.board.checkGameEnd();

        if (endComputer) {
            DomManipulator.endGame("computer", this.player2.board);
        }
    }
}

export default Game;