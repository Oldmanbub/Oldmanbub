let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (user, computer, target) => {
    let userDiff = Math.abs(target-user);
    let computerDiff = Math.abs(target-computer); 

    if (user == computer){
        return true;
    } else if (userDiff < computerDiff){
        return true;
    } else if (computerDiff < userDiff) {
        return false;
    } else {
        return 'Something went wrong.'
    }
};

const updateScore = winner => {
    if (winner == 'human'){
        humanScore ++;
    } else if (winner == 'computer'){
        computerScore ++;
    } else {
        return 'You did not enter a correct value for the winner';
    }
};

const advanceRound = () => currentRoundNumber ++;