// Membuat Object

// Object literal
// var mhs = {
//     nama : "Izuchii",
//     npm : 2142430,
//     email : "izuchii@gmail.com",
//     jurusan : "Teknik Informatika"
// };



// Object - Function declaration
// function objectMahasiswa(nama, npm, email, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.npm = npm;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs = objectMahasiswa("Izuchii", 2142430, "izuchii@gmail.com", "Teknik Informatika");



// Object - Function construct
// function Mahasiswa(nama, npm, email, jurusan){
//     this.nama = nama;
//     this.npm = npm;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// var mhs = new Mahasiswa('Izuchii', 2142430, "izuchii@gmail.com", "Teknik Informatika");



// Konsep This

// This pada Object - function declaration
// this mengembalikkan object global
// function Halo(){
//     console.log(this);
//     console.log('Halo');
// }
// this.Halo();



// This pada Object literal
// this mengembalikan object yang bersangkutan
// var obj = {a : 10, nama : "Izuchii"};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();



// This pada Object - function constructor
// this mengembalikan object yang baru dibuat yaitu (obj1 dab obj2)
function Halo() {
    console.log(this);
    console.log('Halo');
}
var obj1 = new Halo();
var obj2 = new Halo();