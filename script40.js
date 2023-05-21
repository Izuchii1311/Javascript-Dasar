var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if ( penumpang.length == 0 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // Telusuri seluruh kursi awal
        for ( var i = 0; i < penumpang.length; i++ ) {
            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang ) {
                console.log(namaPenumpang + ' sudah berada di dalam angkot');
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if ( penumpang.length == 0 ) {
        console.log('Angkot masih kosong.');
        return penumpang;
    } else {
        for ( var i = 0; i < penumpang.length; i++){
            // penumpang namanya sama
            if ( penumpang[i] == namaPenumpang ){
                penumpang[i] = undefined;
                return penumpang;
                // angkot kosong
            } else if ( i == penumpang.length - 1 ){
                console.log(namaPenumpang + " tidak ada di dalam angkot");
                return penumpang;
            } else {

            }

        }
    }
}