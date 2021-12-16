// Script for The Odin Project  - Rock, Paper and Scissors Game

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const playerImage = document.querySelector(".userChoice");
const computerImage = document.querySelector(".computerChoice");

function genComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${playerChoice} beats ${computerChoice}. You Win!`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${playerChoice} loses to ${computerChoice}. You Lose!`;
}

function draw(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${playerChoice} equals to ${computerChoice}. It's a Draw!`;
}



function game(playerChoice) {
    const computerChoice = genComputerChoice();
    switch (playerChoice + computerChoice) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            win(playerChoice, computerChoice);
            break;
        case "PaperScissors":
        case "RockPaper":
        case "ScissorsRock":
            lose(playerChoice, computerChoice);
            break;
        case "PaperPaper":
        case "RockRock":
        case "ScissorsScissors":
            draw(playerChoice, computerChoice);
            break;
    }
    showSelection(playerChoice, computerChoice);
    endGame();


}

function showSelection(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        playerImage.style.backgroundImage = "url('images/rock.png')";
    } 
    else if (playerChoice === 'Paper') {
        playerImage.style.backgroundImage = "url('images/paper.png')";
    }
    else {
        playerImage.style.backgroundImage = "url('images/scissors.png')";
    }

    if (computerChoice === 'Rock') {
        computerImage.style.backgroundImage = "url('images/rock.png')";
    } 
    else if (computerChoice === 'Paper') {
        computerImage.style.backgroundImage = "url('images/paper.png')";
    }
    else {
        computerImage.style.backgroundImage = "url('images/scissors.png')";
    }
}

function core() {

    rock_div.addEventListener('click', function() { 
        game('Rock');
    
    })
    
    paper_div.addEventListener('click', function() { 
        game('Paper');
    
    })
    
    scissors_div.addEventListener('click', function() { 
        game('Scissors');
    
    })
}

function endGame() {
    const disableButtons = document.getElementById("buttons");
    if (playerScore === 5) {
        disableButtons.classList.add("disabledButton");
        result_p.innerHTML = "Congratulations! You are the Winner.";
    } 
    if (computerScore === 5) {
        disableButtons.classList.add("disabledButton");
        result_p.innerHTML = "It seems the Computer got the best this time. You lose!";
    }
}

core();
