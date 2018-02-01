var playerWins = 0;
var computerWins = 0;

function playRound (playerSelection, computerSelection) {   
    if (playerSelection === computerSelection) {
        return "DRAW!";  
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWins++;
        console.log("LOSS")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++;
        console.log("WIN")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWins++;
        console.log("LOSS")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        console.log("WIN")
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        console.log("WIN")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        console.log("LOSS")
    } else if (playerSelection != "rock" || "paper" || "scissors") {
        return "Please only input 'rock', 'paper' or 'scissors'";
    };
};

const game = () => {
    const buttons = document.querySelectorAll('.rpsButton');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const playerSelection = button.id;            
            const rps = ["rock", "paper", "scissors"];
            function computerPlay (choice) {
                return rps[Math.floor(Math.random()*rps.length)];
            };
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            winCondition();
            document.getElementById('playerRound').innerHTML = playerWins;
            document.getElementById('computerRound').innerHTML = computerWins;
            document.getElementById('resultTextId').innerHTML = resultText;
            document.getElementById('playerSelection').innerHTML = "player: " + playerSelection;
            document.getElementById('computerSelection').innerHTML = "computer: " + computerSelection;
            const showButton = document.querySelector('.button');
            showButton.classList.add('buttonFadeIn');
            showButton.addEventListener('animationend', removeTransition);
            function removeTransition (e) {
                showButton.classList.remove('buttonFadeIn');
            };
            
            // showButton.classList.toggle('buttonFadeIn');                                        
            resetButton();
            
        });
    }); 
    const winCondition = () => {
        var total = playerWins + computerWins;
        //when the total is 5, stop the game
        if (total === 5) {
            reset();
        } else if ((playerWins || computerWins) === 3) {
            reset();
        }; 
        console.log(`playerWins = ${playerWins}`);
        console.log(`computerWins = ${computerWins}`);
        console.log(`total = ${total}`);
    };
};

var modal = document.getElementById('resultModal');
var resultText;

const showResult = () => {
    modal.style.display = "block";
};

const reset = () => {
    
    if (playerWins > computerWins) {
        showResult();
        resultText = "Victory!";
        console.warn("Victory!");
    } else {
        showResult();
        resultText = "Defeat!";
        console.warn("Defeat!");
    };
    playerWins = 0;
    computerWins = 0;
};

const resetButton = () => {
    const restart = document.querySelector('#restart');
    restart.addEventListener('click', (e) => {
        modal.style.display = "none";
        showButton.classList.add('button');
    });
};
// const showButton = document.querySelector('.button');

game();

