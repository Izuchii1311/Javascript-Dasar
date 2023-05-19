var tanya = true;
while (tanya == true){

    // Menangkap pilihan playernya
    var p = prompt("Pilih : gajah, semut, orang");

    // Menangkap pilihan com
    // generate bilangan random
    var com = Math.random();

    if (com < 0.34){
        com = 'gajah';
    } else if (com >= 0.34 && com <0.67){
        com = 'orang';
    } else {
        com = 'semut';
    }

    // rules
    var hasil = '';

    // Using If Else If
    // if (p == com){
    //     hasil = 'Seri!!';
    // } else if (p == 'gajah' ){
    //     if (com == 'orang'){
    //         hasil = 'Menang!!';
    //     } else {
    //         hasil = 'Kalah!!';
    //     }
    // } else if (p == 'orang'){
    //     if (com == 'gajah'){
    //         hasil = 'Kalah!!';
    //     } else {
    //         hasil = 'Menang!!';
    //     }
    // } else {
    //     if (com == 'orang'){
    //         hasil = 'Kalah!!';
    //     } else {
    //         hadil = 'Menang!!';
    //     }
    // }

    // Ternary
    if (p == com){
        hasil = 'Seri!!';
    } else if (p == 'gajah'){
        hasil = (com == 'orang') ? 'Menang!!' : 'Kalah!!'; 
    } else if (p == 'orang'){
        hasil = (com == 'semut') ? 'Menang!!' : 'Kalah!!';
    } else if (p == 'semut'){
        hasil = (com == 'gajah') ? 'Menang!!' : 'Kalah!!';
    } else {
        hasil = 'Memasukkan pilihan yang salah';
    }

    // result
    alert('Kamu Memilih : ' + p + '\nKomputer memilih : ' + com + '\nMaka Hasilnya adalah kamu ' + hasil);
    tanya = confirm('Apakah ingin mengulagi lagi?');
}

alert('Terima Kasih Sudah Bermain');