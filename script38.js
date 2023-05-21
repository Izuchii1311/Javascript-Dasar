// Method pada Array 

// 1. Join
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// console.log(arr.join())    //  Izuchii,Hutao,Herta,Dinda,Anisa

// 2. push & pop
// push menambah element array di akhir array (bisa menambahkan banyak element sekaligus)
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// arr.push('Salsabila');
// console.log(arr);

// pop menghilangkan elemnent terakhir dari sebuah array (menghapus 1 / 1)
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// arr.pop();
// console.log(arr);

// 3. shift
// menghilangkan element pertama (sama seperti pop)
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// arr.shift();
// console.log(arr);

// 4. unshift
// menambahan element baru di awal array
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// arr.unshift('Luthfi');
// console.log(arr);

// 5. Splice
// Menyisipkan element array di tengah tengah
// splice(indexAwal, mauDihapusBerapa, Elementbaru1, Elementbaru2)
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// //arr.splice(2, 0, 'Ayangkuu');               //['Izuchii', 'Hutao', 'Ayangkuu', 'Herta', 'Dinda', 'Anisa']
// arr.splice(1, 2);                             //['Izuchii', 'Dinda', 'Anisa']
// console.log(arr);


// 6. Slice
// Mengiris sebuah array menjadi array yang baru
// slice(indexAwal, diakhiri sebelum indexAkhir);
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// // Izuchii [Hutao Herta] Dinda Anisa
// var arr2 = [];
// arr2 = arr.slice(1,3);              // Hutao Herta
// console.log(arr2);


// 7. Foreach (tidak mengembbalikan array)
// var angka = [1,2,3,4,5,6,7,8];
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];

// // Menggunakan for
// // for (var i = 0; i < angka.length; i++){
// //     console.log(angka[i]);
// // }

// // Menggunakan foreach
// // Menjalankan function exspression yang menjalankan elementnya dan menerima parameter e
// // angka.forEach(function(e) {
// //     console.log(e)
// // })

// arr.forEach(function(e, i){
//     console.log('Mahasiswa ke-'+ (i+1) + " adalah " + e);
// })


// 8. Map (mengembalikkan array)
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e) {
//                 return e * 2;
//             })

// console.log(angka2.join(" - "));
// 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16


// 9. Sort
// Mengurutkan isi array
// var angka = [2, 4, 3, 100, 212, 21, 5, 8, 1, 6, 7];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));


// 10. Filter (Menghasilkan array)
// var angka = [2, 4, 3, 100, 212, 21, 5, 8, 1, 6, 7];
// var angka2 = angka.filter(function(e){
//     // return e == 5;     // [5]
//     return e > 5;         //[100, 212, 21, 8, 6, 7]
// });

// console.log(angka2);    


// 11. Find (menghasilkan nilai biasa)
var angka = [2, 4, 3, 100, 212, 21, 5, 8, 1, 6, 7];
var angka2 = angka.find(function(e){
    // return e == 5;     
    return e > 5;         // [100]
});

console.log(angka2);  