let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {    
    game.score = 0; 
    game.currentGame = [];
    game.playerMoves = [];   
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame};