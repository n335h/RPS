//Assigning variables to HTML elements using DOM
const usernameForm = document.querySelector('#username-form');
const game = document.querySelector('.game-container');
var usernameInputForm = document.querySelector('#username-input-form');
var usernameInput = document.querySelector('#username');
var userNameSB = document.querySelector('#userNameSB')

//Username submit event listener
usernameInputForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get user name from input
  var userName = usernameInput.value.trim();
  //If username is valid, show game and hide username form
  if (userName.length > 0 && userName.length <= 10) {
   
    usernameForm.style.display = 'none';
    game.style.display= 'block';
    
    console.log(userName)

  } else {
    alert('Please enter a valid username (max 10 characters)');
  }
});

// Assigning variables to HTML elements using DOM, buttons and results
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultEl = document.querySelector('.result');
// Assigning variables to HTML Elements using DOM for scores
var userScore = document.querySelector('.userScore')
var pcScore = document.querySelector('.pcScore')


// Add click event listeners to the game choices buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Main play game function
var userPoints = 0;
var pcPoints = 0;

userNameSB.innerText= userName;

function playGame(userChoice) {
  
  console.log(userScore)
  // Generate a random computer choice
  const choices = ['rock', 'paper', 'scissors'];
  //Computer choice random
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determines the winner
  let result;
  if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You Win!';
    //adding points to userScore
    userPoints+=1;
    userScore.innerText = userPoints;
    } else if (userChoice === computerChoice) {
    result = 'Tie!';
  } else {
    result = 'Computer Wins!';
    //adding points to pcScore
    pcPoints+=1;
    pcScore.innerText = pcPoints;
    }

  // Show the result
  resultEl.textContent = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
  resultEl.parentElement.style.display = 'block';
}





