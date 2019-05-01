function xo(str) {
  // you can only write your code here!
  var counterX = 0
  var counterO = 0

  for(var i=0;i<str.length;i++){
      if(str[i] === 'x'){
          counterX++
      }else{
          counterO++
      }
  }
  if(counterO == counterX){
      return true
  }else{
      return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true