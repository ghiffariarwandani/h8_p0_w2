// No.1

console.log('No.1 LOOPING PERTAMA');

var nilaiAwal = 2;

while(nilaiAwal <= 20) {

	if (nilaiAwal % 2 === 0) {
		console.log(nilaiAwal + ' -' + ' I love coding');
	}

nilaiAwal++;
}

console.log('No.1 LOOPING KEDUA')

var nilaiAwal = 20;

while(nilaiAwal >= 2) {

	if (nilaiAwal % 2 === 0) {
		console.log(nilaiAwal + ' -' + ' I love coding');
	}

nilaiAwal--;
}
// No.2

console.log('No.2 LOOPING PERTAMA');

var nilaiAwal2;

	for(nilaiAwal2 = 1; nilaiAwal2 <= 20; nilaiAwal2++ ) {
		console.log(nilaiAwal2 + ' -' + ' I love coding');
	}

console.log('No.2 LOOPING KEDUA');

var nilaiAwal2;

	for(nilaiAwal2 = 20; nilaiAwal2 >= 1; nilaiAwal2-- ) {
		console.log(nilaiAwal2 + ' -' + ' I love coding');
	}

// No.3A

var nilaiAwal3;

	for(nilaiAwal3 = 1; nilaiAwal3 <= 100; nilaiAwal3++) {
		if(nilaiAwal3 % 2 === 0) {
			console.log ('nilai sekarang= ' + nilaiAwal3 + ' GENAP')
		} else {
			console.log ('nilai sekarang= ' + nilaiAwal3 + ' GANJIL')
		}
	}

// No. 3B
	
	console.log('LOOPING COUNTER 2')
	var nilaiAwal3;

	for(nilaiAwal3 = 1; nilaiAwal3 <= 100; nilaiAwal3+=2) {
		if(nilaiAwal3 % 3 === 0) {
			console.log ('nilai sekarang= ' + nilaiAwal3 + ' KELIPATANNYA 3')
		} else {
			console.log ('nilai sekarang= ' + nilaiAwal3 + '')
		}
	}


	console.log('LOOPING COUNTER 5')
	var nilaiAwal3;

	for(nilaiAwal3 = 1; nilaiAwal3 <= 100; nilaiAwal3+=5) {
		if(nilaiAwal3 % 6 === 0) {
			console.log ('nilai sekarang= ' + nilaiAwal3 + ' KELIPATANNYA 6')
		} else {
			console.log ('nilai sekarang= ' + nilaiAwal3 + '')
		}
	}

	console.log('LOOPING COUNTER 9')
	var nilaiAwal3;

	for(nilaiAwal3 = 1; nilaiAwal3 <= 100; nilaiAwal3+=9) {
		if(nilaiAwal3 % 10 === 0) {
			console.log ('nilai sekarang= ' + nilaiAwal3 + ' KELIPATANNYA 10')
		} else {
			console.log ('nilai sekarang= ' + nilaiAwal3 + '')
		}
	}