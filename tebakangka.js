var lagi = true;

while(lagi){
    // Menangkap Inputan Platyer
    alert("Ini adalah permainan tebakan angka \nSilahkan masukkan angka 1-10 \nKesempatan Anda hanya 3x tebakan");
    var pemain = parseInt(prompt("Masukkan angka tebakan anda"));

    // Membuat aturan permainan (Random angka 1 - 10)
    var computer = Math.round(Math.random() * 10);

    // Aturan permainan
    var hasil = "";

    // Logic
    for(var kesempatan = 3; kesempatan >= 1; kesempatan--){
        if(pemain == computer){
            hasil = "pilihan anda benar";
            alert("Selamat karena " + hasil);
            break;
        } else if(pemain != computer && kesempatan > 1){
                if(pemain > computer){
                    hasil = "Pilihan anda terlalu besar";
                    alert("Maaf karena " + hasil + "\nKesempatan anda 2x Lagi");
                    pemain = parseInt(prompt("Masukkan lagi angka anda"));
                } else if(pemain < computer){
                    hasil = "Pilihan anda terlalu kecil \nKesempatan anda 1x Lagi";
                    alert("Maaf karena " + hasil + "\nKesempatan anda 1x Lagi");
                    pemain = parseInt(prompt("Masukkan lagi angka anda"));
                } else{
                    alert("Anda salah memasukkan angka \nKesempatan terakhir");
                    pemain = parseInt(prompt("Masukkan lagi angka anda"));
                }
        } else if(pemain != computer && kesempatan == 1){
            hasil = "Maaf anda kehabisan kesempatan dan jawaban yang benar adalah";
            alert(hasil);
        }
    } lagi = confirm("Masih mau coba lagi?"); 

}
alert("Terima kasih telah bermain");