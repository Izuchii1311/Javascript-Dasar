// Pop Up Box
// alert("Hello, World!");

// var pop = prompt("Masukkan Nama Anda : ");
// alert("Hello " + pop);

// var test = confirm('Are you sure?');
// if (test === true){
//     alert('User menekan tombol OK!');
// } else {
//     alert('User menekan tombol CANCEL!');
// }

alert('Selamat Datang ');
var lagi = true;

while(lagi === true){
    var nama = prompt("Masukkan Nama Anda : ");
    alert("Halo" + nama);

    lagi = confirm('coba lagi?');
} 
alert('Terima Kasih!');