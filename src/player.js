class Player {
    constructor(ai) {
        this.ai = ai;
        this.board = new GameBoard();
    }

    makeTurn(x, y) {
        if (this.ai) {
            return {x: Math.floor(Math.random() * 10), 
                    y: Math.floor(Math.random() * 10)}
        }

        
    }
}