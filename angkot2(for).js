var jmlAngkot = 10;
var angkotBeroperasi = 7;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot++ + ' sedang beroperasi dengan baik');
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <=jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}