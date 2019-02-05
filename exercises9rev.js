// No.1 

function shutOut() {
	console.log('Halo Function!');
};

shutOut();


// No.2

var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2) {


var hasilPerkalian = num1 * num2;

return hasilPerkalian

}

console.log(calculateMultiply(num1, num2));

// No.3 

	var name = 'Agus';
	var age = 30;
	var address = 'Jln. Malioboro, Yogjakarta';
	var hobby = 'Gaming';

function processSentence(name, age, address, hobby) {

	var fullSentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun' + ', alamat saya di ' + 	address + ' dan saya punya hobby ' + hobby;

	return fullSentence;
}

console.log(processSentence(name, age, address, hobby));