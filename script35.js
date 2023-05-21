// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr [0] = "Izuchii";
// arr [1] = "Luthfi";
// arr [2] = "Hutao";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ['Izuchii', 'Hutao', 'Herta'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array (tidak menggunakan object)
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// for( var i = 0; i < arr.length; i++ ){
//     console.log('Mahasiswa Ke-' + i + " " + arr[i]);
// }


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
var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
arr.shift();
console.log(arr);

// 4. unshift
// menambahan element baru di awal array
// var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// arr.unshift('Luthfi');
// console.log(arr);
