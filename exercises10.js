

function bandingAngka(angka1, angka2) {

	if (angka1 > angka2) {
		console.log('FALSE');
	} else if (angka1 === angka2) {
		console.log('-1');
	} else {
		console.log('TRUE');
	}
}


var angka1 = prompt('Masukan nilai 1: ');
var angka2 = prompt('Masukan nilai 2: ');

console.log(bandingAngka(angka1, angka2));



