// Contoh 1
// Global Scope
// var a =  1;

// function test() {
//     // name conflict
//     var a = 2;
//     console.log(a); // 2
//     console.log(window.a); // 1
// }

// test();
// // console.log(a); // 1




// Contoh 2
// Global Scope
// var a = 1;

// function test() {
//     // jika tidak memakai var, maka akan menimpa variabel globalnya
//     a = 2;
// }

// test();
// console.log(a); // 2




// Contoh 3
// Global Scope
var a = 1;
function test(a) {
    console.log(a);
}

// variabel akan ditimpa karena function menerima parameter dan argument nya diisi dengan angka 2 maka var a tidak akan dipakai
test(2);