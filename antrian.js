class Antrian {
    constructor(){
        this.angkateks = new AngkaTeks;
        this.arr = [];
        this.called = false;
        this.jeda = 0;
        this.laju = 0;
        this.test = 0;
        setInterval(() => {
            if(this.called == false && this.arr.length > 0){
                this.panggilAngka(this.arr.pop());
            }
        }, 500);
    }

    panggil(audio,duration) {
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }, duration);
    }

    panggilAngka(data) {
        var teks_angka = this.angkateks.keTeks(data.angka);
        var teks_loket = this.angkateks.keTeks(data.loket);
        var teks_angka_array = teks_angka.split(' ');
        var teks_loket_array = teks_loket.split(' ');
        var total_duration = 0;
        var temp_array = [];
        var temp = [];
        
        this.called = true;
        if(data.laju){
            this.laju = data.laju;
        }

        // maksimal kecepatan 180
        if(this.laju > 180) this.laju = 180;
        var ke_mili_detik = 1000-this.laju;
        
        temp_array.push('opening','awalan');
        temp_array = temp_array.concat(teks_angka_array);
        temp_array.push('tempat');
        temp_array = temp_array.concat(teks_loket_array);
        temp_array.push('closing');

        // console.log(temp_array);

        temp_array.forEach((item, key) => {
            if (item) {
                console.log(item);
                temp.push({name:item , duration:document.getElementById(item).duration*ke_mili_detik});
            }
        });
        
        temp.forEach((item, key) => {
            if (key > 0) {   
                total_duration += temp[key-1].duration;
            }

            if(key == temp.length-1){
                setTimeout(() => {
                    this.called = false;
                }, total_duration+(item.duration+this.jeda));
            }

            this.panggil(document.getElementById(item.name), total_duration);
        });

        // console.log({narasi: teks_angka_array, laju:this.laju});
    }

    tambah(data) {
        return this.arr.unshift(data);
    }
}