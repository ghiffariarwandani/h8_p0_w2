
function balikKata(kata) {

	var words = '';

	for ( var i = kata.length - 1; i >= 0; i-- ) {

		words += kata[i];
	}
	return words;
}

console.log(balikKata(prompt('Masukan Kata: ')));