javascript: 

var characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var passwordLength = 12;
var password = '';
for (var i = 0; i < passwordLength; i++) {
	var randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber + 1);
}

alert('Password: ' + password + '\nProgrammed By IlySn0w\nMy Github:	https://github.com/IlySn0w/ilysn0ws-bookmarklets');
