import './style.css';
import Game from './game';
import Ship from './ship';
import Player from './player';
import GameBoard from './gameboard';
import DomManipulator from './DOM';


mainLoop();

function mainLoop() {
    let field1 = document.querySelector(".field-1");
    let field2 = document.querySelector(".field-2");

    DomManipulator.createBoard(field1);
    DomManipulator.createBoard(field2);

    let game = new Game(true);
    game.start();

    DomManipulator.renderPlayerBoard(game.player1.board, field1);
    DomManipulator.renderEnemyBoard(game.player2.board, field2, game);
}