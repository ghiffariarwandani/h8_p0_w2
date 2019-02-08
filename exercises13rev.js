var counterX=0;
var counterY=0;

function xo(str) {
  counterX=0;
  counterY=0;
  
  for(var i=0;i<=str.length;i++) {
    for(var j=0;j<=str.length;j++) {
      if(str[i]===str[j] && i!==j) {
        if(str[i]==='x') {
          counterX++;
        } else {
          counterY++
        }
      }
    }
  }
  
  if(counterX === counterY) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('oxxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
