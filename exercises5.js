// No.1

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

alert('No.1 ' + word+ ' '+second+' '+third+' '+fourth+ ' '+sixth+' '+seventh);

// No.2

var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

alert('No.2' + ' First Word: ' + firstWord);
alert('Second Word: ' + secondWord);
alert('Third Word: ' + thirdWord);
alert('Fourth Word: ' + fourthWord);
alert('Fifth Word: ' + fifthWord);

// No.3

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 13);
var thirdWord3 = word.substring(15, 16); 
var fourthWord3 = word.substring(18, 19); 
var fifthWord3 = word.substring(21, 24);

alert('No.3 ' + 'First Word: ' + firstWord);
alert('Second Word: ' + secondWord);
alert('Third Word: ' + thirdWord);
alert('Fourth Word: ' + fourthWord);
alert('Fifth Word: ' + fifthWord);

// No.4

var word4 = 'wow JavaScript is so cool';
var firstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14);
var thirdWord4 = word.substring(15, 17); 
var fourthWord4 = word.substring(18, 20); 
var fifthWord4 = word.substring(21, 27);

var firstWordLength = firstWord4.length;
// create new variables around here
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

alert('No.4 ' + 'First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
alert('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
alert('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
alert('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
alert('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);