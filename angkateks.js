class AngkaTeks {
    constructor(){
        this.teks = [
            '', 'satu','dua', 'tiga', 'empat','lima',
            'enam', 'tujuh', 'delapan', 'sembilan', 
            'sepuluh', 'sebelas'
        ];
    }

    keTeks(param) {
        var angka = Math.floor(param);
        if(angka < 12){
            return this.teks[angka];
        }else if(angka < 20){
            return this.keTeks(angka-10)+' belas';
        }else if(angka < 100){
            return this.keTeks(angka/10)+' puluh '+this.keTeks(angka % 10);
        }else if(angka < 200){
            return 'seratus '+this.keTeks(angka-100);
        }else if(angka < 1000){
            return this.keTeks(angka/100)+' ratus '+this.keTeks(angka % 100);
        }else if(angka < 2000){
            return 'seribu '+this.keTeks(angka % 1000);
        }else if(angka < 1000000){
            return this.keTeks(angka/1000)+' ribu '+this.keTeks(angka % 1000);
        }else if(angka < 1000000000){
            return this.keTeks(angka/1000000)+' juta '+this.keTeks(angka % 1000000);
        }else if(angka < 1000000000000){
            return this.keTeks(angka/1000000000)+' miliar '+this.keTeks(angka % 1000000000);
        }
    }
}