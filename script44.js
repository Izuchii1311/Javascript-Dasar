// Latihan Object - Membuat Object Angkot
function Angkot(supir, trayek, kas, penumpang){
    this.supir = supir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;

    // kelola penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // kelola penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Angkot Masih Kosong');
            return false;
        } 
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar; 
                return this.penumpang;
            }
        }

    }
}

// instansiasi
var angkot1 = new Angkot('Dadang', ['Cimahi', 'Leuwi Panjang'], 0, []);
var angkot2 = new Angkot('Saep', ['Antapani', 'Ciroyom'], 0, []);