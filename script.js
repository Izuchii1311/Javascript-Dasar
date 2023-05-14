// Kasus 1
// *
// **
// ***
// ****
// *****

// var bintang = '';

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j <= i; j++){
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);

// Kasus 2
// *****
// ****
// ***
// **
// *

// var bintang = '';

// for(var i = 5; i > 0; i--){
//     for(var j = 0; j <= i; j++){
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);

// Kasus 3
//      *
//     ***
//    *****
//   *******
//  *********

var n = 5;
var string = "";

for (var i = 1; i <= n; i++) {
  // untuk mengatur jarak
  for (var j = 1; j <= n - i; j++) {
    string += " ";
  }
  // nge-print bintangnya
  for (var k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);