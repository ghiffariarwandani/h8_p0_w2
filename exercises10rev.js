

function bandingAngka(angka1, angka2) {

	if (angka2 > angka1) {
		return true
	} else if (angka1 === angka2) {
		return -1
	} else {
		return false
	}
}


var angka1 = prompt('Masukan nilai 1: ');
var angka2 = prompt('Masukan nilai 2: ');

console.log(bandingAngka(angka1, angka2));



