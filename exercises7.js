// No. 1

	var rows1 = 5;

	while(rows1 !== 0) {
		console.log('*')
	rows1--;
	}

 // No.2
	var rows2 = 5;
	var asterisk;

	for( var i = 1; i <= rows2; i++) {
    asterisk=''

		for(var j = 1; j <= rows2; j++) {
			asterisk+= '*'
		}
		console.log(asterisk)
	}

// No.3
	var rows2 = 5;
	var asterisk;

	for( var i = 1; i <= rows2; i++) {
    asterisk=''
		for(var j = 1; j <= i; j++) {
			asterisk+= '*'
		}
		console.log(asterisk)
	}


