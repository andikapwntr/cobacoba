//harga awal 10000 -12000 -14400
//tiap menit naik 20%
//tiap kelipatan 4 naiknya 10%
//harganya diatas 30jt return string 'barang sudah dibeli'


const lelang =(menit)=>{

    var awal = 10000
    var hitunganmenit =1;

    do{
        if(hitunganmenit%4===0){
            awal += Math.ceil(awal*0.1)

        }else{
            awal+= Math.ceil(awal*0.2)
        }
        hitunganmenit ++

    }while(hitunganmenit<menit);

    return awal > 30000000? 'barang sudah dibeli':awal

}
console.log(lelang(2))
console.log(lelang(50))
console.log(lelang(49))