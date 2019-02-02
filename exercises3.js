

var nama = prompt('masukan nama:');

	if (nama !== '') {
		alert('Hallo ' + nama + ' Selamat datang di Dunia Proxytia. Silahkan pilih peran untuk memulai game!');
	} else {
		alert('masukan nama!');
	} 


var peranUser = alert('pilihan peran untuk memulai game. Ksatria, Tabib dan Penyihir');
	
var peran = prompt('Silahkan pilih peran anda dari ketiga peran yang telah disebutkan diatas')	

	if (peran === 'ksatria') {
		alert('Halo Ksatria ' + nama + ', kamu akan ada dibarisan depan saat peperangan');
	} else if ( peran === 'tabib') {
		alert('Halo Tabib ' + nama + ', kamu akan ada dibarisan belakang saat peperangan dan siap untuk mengobati setiap Ksatria yang terluka');
	} else if (peran === 'penyihir') {
		alert('Halo Penyihir ' + nama + ', kamu akan ada dibarisan tengah saat peperangan dan siap menyerang dengan sihirmu');
	} else 
		alert('Masukan Peran sesuai dengan pilihan');

