import GameBoard from "./gameboard";

class DomManipulator {
    static {}
    
    static createBoard(element) {
        for (let y = 0; y < 10; y++) {
            let row = document.createElement("div");
            row.classList.add(`row-${y}`);
            for (let x = 0; x < 10; x++) {
                let cell = document.createElement("button");
                cell.classList.add(`cell-${x}`);
                let hit = document.createElement("div");
                hit.classList.add("non-hit");
                cell.append(hit);
                row.append(cell);
            }
            element.append(row);
        }
    }
    
    static renderPlayerBoard(gameBoard, element) {
        for (let y = 0; y < 10; y++) {
            let row = element.children[y];
            for (let x = 0; x < 10; x++) {
                if (gameBoard.board[x][y].ship != null) {
                    row.children[x].classList.add("ship");
                }
                
                if (gameBoard.board[x][y].hit) {
                    row.children[x].classList.add("hit");
                }
            }
        }
    }
    
    static renderEnemyBoard(gameBoard, element, game) {
        for (let y = 0; y < 10; y++) {
            let row = element.children[y];
            for (let x = 0; x < 10; x++) {
                if (gameBoard.board[x][y].hit) {
                    continue;
                }
                
                const hitEvent = () => {
                    game.nextTurn(x, y);
                    row.children[x].removeEventListener("click", hitEvent);
                };

                row.children[x].addEventListener("click", hitEvent);
            }
        }
    }

    static addEnemyHit(x, y) {
        let element = document.querySelector(".field-1").children[y].children[x];
        element.firstChild.classList.add("hit");
        element.firstChild.classList.remove("non-hit");
    }

    static addPlayerHit(x, y) {
        let element = document.querySelector(".field-2").children[y].children[x];
        element.firstChild.classList.add("hit");
        element.firstChild.classList.remove("non-hit");
        this.announcer("Hit!!");
    }

    static addEnemyMiss(x, y) {
        let element = document.querySelector(".field-1").children[y].children[x];
        element.firstChild.classList.add("miss");
        element.firstChild.classList.remove("non-hit");
    }

    static addPlayerMiss(x, y) {
        let element = document.querySelector(".field-2").children[y].children[x];
        element.firstChild.classList.add("miss");
        element.firstChild.classList.remove("non-hit");
        this.announcer("Miss");
    }

    static endGame(player, enemyBoard) {
        this.announcer(player + " has won the game!");
        
        for (let y = 0; y < 10; y++) {
            let row = document.querySelector(".field-2").children[y];
            for (let x = 0; x < 10; x++) {
                if (enemyBoard.board[x][y].hit) {
                    continue;
                }

                let newElement = row.children[x].cloneNode(true);
                row.replaceChild(newElement, row.children[x]);
            }
        }


    }

    static announcer(msg) {
        let element = document.querySelector(".announcements");
        element.textContent = msg;
    }
}



export default DomManipulator;