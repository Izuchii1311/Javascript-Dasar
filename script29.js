// function tambah (a, b) {
//     return a + b;
// }

// function kali (a,b) {
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(2,3));
// console.log(hasil);


function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }

    return hasil;
}

var hasil = tambah(3,4,5,6);
console.log(hasil);