

function sockMerchant(n, ar) {
    let mapa=new Map();
    for (let index = 0; index < n; index++) {
        const element = ar[index];
        if (mapa.get(element)){
            mapa.set(element, mapa.get(element)+1);
        }else{
            mapa.set(element, 1);
        }
    }
    let result=0;
    for (const v of mapa.values()) {
        result += Math.floor(v/2);
      }
      return result;
}
sockMerchant(9,[10,20,20,10,10,30,50,10,20]);
