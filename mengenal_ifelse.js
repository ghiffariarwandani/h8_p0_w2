
var nama = 'Mikael';
var peran = 'tabib';

	if (nama !== '') {
		console.log('Hallo ' + nama + ' Selamat datang di Dunia Proxytia. Silahkan pilih peran untuk memulai game!');
	} else {
		console.log('masukan nama!');
	} 


var peranUser = console.log('pilihan peran untuk memulai game. Ksatria, Tabib dan Penyihir');
	
	if (peran === 'ksatria') {
		console.log('Halo Ksatria ' + nama + ', kamu akan ada dibarisan depan saat peperangan');
	} else if ( peran === 'tabib') {
		console.log('Halo Tabib ' + nama + ', kamu akan ada dibarisan belakang saat peperangan dan siap untuk mengobati setiap Ksatria yang terluka');
	} else if (peran === 'penyihir') {
		console.log('Halo Penyihir ' + nama + ', kamu akan ada dibarisan tengah saat peperangan dan siap menyerang dengan sihirmu');
	} else 
console.log('Masukan Peran sesuai dengan pilihan');