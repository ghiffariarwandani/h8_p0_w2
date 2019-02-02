var x = '';
var o = '';


function xo(str) {
	
	for( var i = 0; i <= str.length-1; i++ ) {

		if ( str[i] === 'x' ) {
			x += 'x'
		} else if ( str[i] === 'o') {
			o += 'o'
		} else {
			console.log('HANYA MEMASUKAN X DAN O TIDAK YG LAIN')
		}
	}

	if (x.length === o.length) {
			console.log('TRUE')
		} else if ( x.length !== o.length) {
			console.log('FALSE')
		}
	// console.log('O' + o.length);
	// console.log('X' + x.length);
}

xo(prompt('masukan jumlah x dan o: '));