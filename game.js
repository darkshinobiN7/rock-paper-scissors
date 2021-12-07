// Script for The Odin Project  - Rock, Paper and Scissors Game

//Initiating the Computer's AI

function computerPlay() {
    let optionList = ['rock', 'paper', 'scissors'];
    let randomChoice = optionList[Math.floor(Math.random() * optionList.length)];
    return randomChoice;
}

//Running a game between human and computer

function playRound(humanChoice, computerChoice) {

    var humanChoice = prompt("Choose between Rock, Paper or Scissors: ").toLowerCase();
    var computerChoice = computerPlay();


    // Human goes with Rock

    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                return 'T';
            case 'paper':
                return 'M';
            case 'scissors':
                return 'Y';
        }

    // Human goes with Paper

    } else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'rock':
                return 'Y';
            case 'paper':
                return 'T';
            case 'scissors':
                return 'M';
        }

    // Human goes with Scissors
    
    } else if (humanChoice === 'scissors') {
        switch (computerChoice) {
            case 'rock':
                return 'M';
            case 'paper':
                return 'Y';
            case 'scissors':
                return 'T';
        }
    }
}

// Play the game for 5 rounds and provide outcome

function game() {
    let i = 0;
    for (i = 1; i <= 5; i++) {
        let result = playRound()
        if (result === 'M') {
            return 'You lose! Try again.';
        } else if (result === 'Y') {
            return 'You win! Congratulations.'
        } else if (result === 'T') {
            return 'You win! Congratulations.'
        }
    }
}        

game();

