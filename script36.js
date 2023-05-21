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
var arr = ['Izuchii', 'Hutao', 'Herta', "Dinda", "Anisa"];
// Izuchii [Hutao Herta] Dinda Anisa
var arr2 = [];
arr2 = arr.slice(1,3);              // Hutao Herta
console.log(arr2);