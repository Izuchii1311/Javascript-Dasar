// Membuat Object

// Object Literal
// var mhs = {
//     nama : "Izuchii",
//     umur : 20,
//     email : "izuchii@gmail.com",
//     jurusan : "Teknik Informatika",
//     ips : [3.30, 3.20, 3.10, 3.20],
//     alamat : {
//         jalan : "Jl.Madesa No.21",
//         kota : "Bandung",
//         provinsi : "Jawa Barat"
//     }
// };

// var mhs2 = {
//     nama : "Luthfi Nur Ramadhan",
//     umur : 20,
//     email : "luthfiramadhan.lr55@gmail.com",
//     jurusan : "Teknik Informatika",
//     ips : [3.30, 3.20, 3.10, 3.20],
//     alamat : {
//         jalan : "Jl.Madesa No.21",
//         kota : "Bandung",
//         provinsi : "Jawa Barat"
//     }
// };




// Function Declaration
// function buatObjectMahasiswa(nama, npm, email, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.npm = npm;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Izuchii', 2142430, 'izuchii@gmail.com', 'Teknik Informatika');
// var mhs4 = buatObjectMahasiswa('Luthfi', 2142423, 'izuchii@gmail.com', 'Teknik Informatika');

// mhs3.nama = Izuchii



// Note: 
// Sebaiknya jika function declaration diawali huruf kecil
// Dan untuk function constructor diawali huruf besar sebagai pembeda diantara keduanya




// Constructor (Function khusus untuk membuat object)
function Mahasiswa(nama, npm, email, jurusan) {
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs = new Mahasiswa("Izuchii", 31, "izuchiii@gmail.com", "Teknik Informatika");

// mhs.nama = Izuchii