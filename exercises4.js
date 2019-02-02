var tanggal = prompt('masukan tanggal: ');

	if (tanggal > 0 && tanggal <= 31) {
		alert('terima kasih')
	} else {
		alert('assign nilai variabel tanggal disini! dengan angka antara 1 - 31');
	}

var bulan = 10;

	if (bulan > 0 && bulan <= 12) {
		switch (bulan) {
			case 1 :
			bulan ='Januari';
			break;

			case 2 :
			bulan ='Febuari';
			break;

			case 3 :
			bulan ='Maret';
			break;

			case 4 :
			bulan ='April';
			break;

			case 5 :
			bulan ='Mei';
			break;

			case 6 :
			bulan ='Juni';
			break;

			case 7 :
			bulan ='Juli';
			break;

			case 8 :
			bulan ='Agustus';
			break;

			case 9 :
			bulan ='September';
			break;

			case 10 :
			bulan ='Oktober';
			break;

			case 11 :
			bulan ='November';
			break;

			case 12 :
			bulan ='Desember';
			break;
		}

	} else {
		alert('assign nilai variabel bulan disini! dengan angka antara 1 - 12');
	} 

var tahun = prompt('masukan tahun: ')
	if (tahun >= 1990 && tahun <= 2200 ) {
		alert('terima kasih')
	} else {
		alert('assign nilai variabel tahun disini! dengan angka antara 1900 - 2200');
	}

		
		alert(tanggal + ' ' + bulan + ' ' + tahun); 



