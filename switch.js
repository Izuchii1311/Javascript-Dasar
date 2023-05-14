var item = prompt("Masukkan Makanan Sehat : \n(Nasi, Daging, Susu, Hamburger, Hotdog, Bir)\n \n *pilih salah satu dan Huruf besar kecilnya berpegaruh");

switch(item){
    case 'Nasi' :
    case 'Daging' :
    case 'Susu' :
        alert('Makanan ini Sehat!')
        break;
    case 'Hotdog' :
    case 'Hamburger' :
    case 'Bir' :
        alert('Makanan ini Tidak Sehat!');
        break;
    default:
        alert("Yang anda masukkan tidak ada di daftar");
        break;
}

var angka = prompt('Masukkan Angka');

switch(angka){
    case '1':
        alert("Angka yang anda masukkan angka genap");
        break;
    case '2':
        alert("Angka yang anda masukkan agka ganjil");
        break;
    case '3':
        alert("Angka yang anda masukkan agka ganjil");
        break;
    default:
        alert("Yang anda Masukkan Bukan Angka");
        break;
}