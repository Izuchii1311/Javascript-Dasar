var jmlAngkot = 10;
var angkotBeroperasi = 7;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' sedang beroperasi dengan baik');
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik');
    }
}