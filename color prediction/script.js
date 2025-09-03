// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function predictColor() {
//     var colorBox = document.getElementById('colorBox');
//     var message = document.getElementById('message');
//     var colorToPredict = getRandomColor();
//     colorBox.style.backgroundColor = colorToPredict;
    
//     var userPrediction = prompt("Predict the color (enter color code in hex format, e.g., #RRGGBB):");
    
//     if (userPrediction.toUpperCase() === colorToPredict.toUpperCase()) {
//         message.textContent = "Congratulations! You predicted the color correctly.";
//     } else {
//         message.textContent = "Sorry, you predicted wrong. The correct color was: " + colorToPredict;
//     }
// }

var score = 0;
var timer = 60;
var timerInterval;

function startGame() {
    timerInterval = setInterval(updateTimer, 1000);
    generateRandomNumber();
}

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
    document.getElementById('numberBox').textContent = randomNumber;
}

function predictColor(prediction) {
    var number = parseInt(document.getElementById('numberBox').textContent);
    var isEven = number % 2 === 0;

    if ((isEven && prediction === 'green') || (!isEven && prediction === 'red')) {
        score++;
    }

    document.getElementById('score').textContent = 'Score: ' + score;
    generateRandomNumber();
}

function updateTimer() {
    timer--;
    document.getElementById('timer').textContent = 'Time: ' + timer;

    if (timer <= 0) {
        clearInterval(timerInterval);
        alert('Game Over! Your final score is: ' + score);
    }
}

startGame();
