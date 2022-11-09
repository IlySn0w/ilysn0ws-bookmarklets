javascript: 

var playerNum = prompt('Rock, Paper, Or Scissors?\n(1. Rock\n(2. Paper\n(3. Scissiors');

var computerNum = Math.floor(Math.random() * 3) + 1;

switch(playerNum) {
  
  case '1':
    var playerChoice  = 'Rock';
    break;
  case '2':
    var playerChoice = 'Paper';
    break;
  case '3':
    var playerChoice = 'Scissors';
    break;
  default:
    alert('Input not found. Try inputting the number of your choice (I.E for Rock enter 1')
    break;
}

alert('Computer is choosing...');

switch(computerNum) {
  
  case 1:
    var computerChoice = 'Rock';
    break;
    
  case 2:
    var computerChoice = 'Paper';
    break;
    
  case 3:
    var computerChoice = 'Scissors';
    break;
}

if (playerNum = 1) {
  if (computerNum = 1) {
    alert('Tie!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 2) {
    alert('You lost!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 3) {
    alert('You Won!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);

}

if (playerNum = 2) {
  if (computerNum = 1) {
    alert('You won!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 2) {
    alert('Tie!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 3) {
    alert('You lost!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
    
if (playerNum = 3) {
  if (computerNum = 1) {
    alert('You lost!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 2) {
    alert('You won!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
  }
  if (computerNum = 3) {
    alert('Tie!\nYou chose ' + playerChoice + ' and the computer chose ' + computerChoice);
}

alert('Thank you for using my bookmarklet!\nProgrammed by IlySn0w\nMy Github: https://github.com/IlySn0w/ilysn0ws-bookmarklets');



