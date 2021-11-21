let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};

const compareGuesses = (human, computer, secret) => {
    if (human < 0 || human > 9) {
        alert('number is out of range');
    }
    const humanDiff = getAbsoluteDistance(human - secret);
    const computerDiff = getAbsoluteDistance(computer - secret);
    if (humanDiff === computerDiff) {
        return true;
    }
    if (humanDiff < computerDiff) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};