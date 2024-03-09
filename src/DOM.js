function createBoard(element) {
    
    for (let y = 0; y < 10; y++) {
        let row = document.createElement("div");
        row.classList.add(`row-${y}`);
        for (let x = 0; x < 10; x++) {
            let cell = document.createElement("button");
            cell.classList.add(`cell-${x}`);
            let hit = document.createElement("div");
            hit.classList.add("hit");
            cell.append(hit);
            row.append(cell);
        }
        element.append(row);
    }
}

function renderPlayerBoard(gameBoard) {
    for (let y = 0; y < 10; y++) {
        let row = document.querySelector(`row-${y}`);
        for (let x = 0; x < 10; x++) {
            if (gameBoard.board.ship != null) {
                row[x].classList.add("ship");
            }
            
            if (gameBoard.board.hit) {
                row[x].classList.add("hit");
            }
        }
    }
}

function renderEnemyBoard(gameBoard) {

}


module.exports = createBoard, renderEnemyBoard, renderPlayerBoard;