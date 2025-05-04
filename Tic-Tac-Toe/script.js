const board = Array.from(document.querySelectorAll('.btn'));
const playerName = document.querySelector('.player');
const playerScoreButton = document.querySelector('.playerScore');
const aiScoreButton = document.querySelector('.aiScore');
const resetButton = document.querySelector('.reset');

let playerScore = 0;
let aiScore = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

playerName.innerHTML = prompt('Your Name') || 'Player';
let currentPlayer = prompt(`Choose 'X' or 'O'`) || 'X';
while(currentPlayer.match(/[^XO]/)) {
    alert('Invalid input! Please choose either X or O.');
    currentPlayer = prompt(`Choose 'X' or 'O'`) || 'X';
}
let aiPlayer = currentPlayer === 'X' ? 'O' : 'X';

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWin = (board, player) => {
    return winPatterns.some(pattern => pattern.every(index => board[index] === player));
};

const checkTie = (board) => board.every(cell => cell === 'X' || cell === 'O');

const updateBoard = (index) => {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        board[index].innerHTML = currentPlayer;
        if (checkWin(gameBoard, currentPlayer)) {
            if (currentPlayer === 'X') {
                alert(`${playerName.innerHTML} wins!`);
                playerScore++;
                playerScoreButton.innerHTML = playerScore;
            } else {
                alert('AI wins!');
                aiScore++;
                aiScoreButton.innerHTML = aiScore;
            }
            resetGame();
        } else if (checkTie(gameBoard)) {
            alert("It's a tie!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === aiPlayer) {
                aiMove();
            }
        }
    }
};

const aiMove = () => {
    let bestMove = null;

    bestMove = findBestMove('O');
    if (bestMove !== null) {
        updateBoard(bestMove);
        return;
    }

    bestMove = findBestMove('X');
    if (bestMove !== null) {
        updateBoard(bestMove);
        return;
    }

    let emptyIndices = gameBoard.map((value, index) => value === '' ? index : null).filter(value => value !== null);
    let randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    updateBoard(randomIndex);
};

const findBestMove = (player) => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === '') return c;
        if (gameBoard[a] === player && gameBoard[c] === player && gameBoard[b] === '') return b;
        if (gameBoard[b] === player && gameBoard[c] === player && gameBoard[a] === '') return a;
    }
    return null;
};

const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    board.forEach(button => button.innerHTML = '');
    currentPlayer = 'X';
};

board.forEach((button, index) => {
    button.addEventListener('click', () => updateBoard(index));
});

resetButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    board.forEach((button) => {
        button.innerHTML = '';
    });
    currentPlayer = prompt(`Choose 'X' or 'O'`) || 'X';
    while(currentPlayer.match(/[^XO]/)) {
        alert('Invalid input! Please choose either X or O.');
        currentPlayer = prompt(`Choose 'X' or 'O'`) || 'X';
    }
    aiPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerScore = 0;
    aiScore = 0;
    playerScoreButton.innerHTML = playerScore;
    aiScoreButton.innerHTML = aiScore;
});