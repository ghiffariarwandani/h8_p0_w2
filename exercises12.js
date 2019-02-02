function konversiMenit(menit) {

	var jam ='1 : '
	var newMenit = menit - 60;

	if (menit >= 60 && menit <= 69 ) {
		return jam + '0' + newMenit
	} 

	else if (menit >= 60 && menit >= 70 && menit < 120) {
		return jam + newMenit
	} 

	else if (menit >= 120 && menit <= 129) {
		jam = '2 : '
		return jam + '0' + (newMenit - 60)
	}

	 else if (menit >= 129 && menit < 180) {
		jam = '2 : '
		return jam + (newMenit - 60)
	} 

	else {
		return '0: ' + menit;
	}
}

console.log(konversiMenit(prompt('Masukan menit: ')));