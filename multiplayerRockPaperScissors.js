javascript: 

var playerNum = parseInt(prompt('Player 1:\nRock, Paper, Or Scissors?\n(1. Rock\n(2. Paper\n(3. Scissiors'));

var player2Num = parseInt(prompt('Player 2:\nRock, Paper, Or Scissors?\n(1. Rock\n(2. Paper\n(3. Scissiors'));

switch(playerNum) {
  
  case 1:
    var playerChoice  = 'Rock';
    break;
  case 2:
    var playerChoice = 'Paper';
    break;
  case 3:
    var playerChoice = 'Scissors';
    break;
  default:
    alert('Input not found. Try inputting the number of your choice (I.E for Rock enter 1');
    break;

}
switch(player2Num) {
  
  case 1:
    var player2Choice  = 'Rock';
    break;
  case 2:
    var player2Choice = 'Paper';
    break;
  case 3:
    var player2Choice = 'Scissors';
    break;
  default:
    alert('Input not found. Try inputting the number of your choice (I.E for Rock enter 1');
    break;


}

if (playerNum == 1) {
  if (player2Num == 1) {
    alert('Tie!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 2) {
    alert('Player 2 won!\nPlayer 1 chose chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 3) {
    alert('Player 1 won!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }

}

if (playerNum == 2) {
  if (player2Num == 1) {
    alert('Player 1 won!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 2) {
    alert('Tie!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 3) {
    alert('Player 2 won!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
}

    
if (playerNum == 3) {
  if (player2Num == 1) {
    alert('Player 2 won!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 2) {
    alert('Player 1 won!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
  if (player2Num == 3) {
    alert('Tie!\nPlayer 1 chose ' + playerChoice + ' and player 2 chose ' + player2Choice);
  }
}

alert('Thank you for using my bookmarklet!\nProgrammed by IlySn0w\nMy Github: https://github.com/IlySn0w/ilysn0ws-bookmarklets');
