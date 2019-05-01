function konversiMenit(menit) {
  // you can only write your code here!
  var jam = 0

  for(var i=0;i<menit;i++){
      if(menit >= 60){
          jam++
          menit -= 60
      }
  }

  if(menit < 10){
      return jam + ':0' + menit 
  }else{
      return jam + ':' + menit
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00