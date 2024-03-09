class Game {
    constructor(ai) {
        this.player1 = new Player(false);
        this.player2 = new Player(ai);
    }

    start() {
        this.#setup(this.player1);
        this.#setup(this.player2);

       
    }

    #setup(player) {
        for (let i = 2; i < 6; i++) {
            let ship = new Ship(i);
            player.gameBoard.ships.push(ship);
            let valid = false;
            while (!valid) {
                let dir = "";
                Math.floor(Math.random() * 2) == 1 ? dir += "x" : dir += "y";
                valid = player.gameBoard.placeShip(ship, "x", 
                    Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            }
        }
    }
}