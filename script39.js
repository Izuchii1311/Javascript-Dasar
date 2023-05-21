var penumpang = ['Izuchii', undefined, 'Luthfi'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if ( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluarkan dari function
        return penumpang;
    } else {
        // Telusuri seluruh kursi awal
        for ( var i = 0; i < penumpang.length; i++ ) {
            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                // Tambahkan penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluarkan dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang ) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah berada di dalam angkot');
                // kembalikan isi array & keluarkan dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1 ) {
                // Tambahkan penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluarkan dari function
                return penumpang;
            }
        }
    }
}