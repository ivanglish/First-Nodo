function minimumBribes(q) {
    let result = 0;
    let mapa = new Map();
    let len = q.length;
    let aux = 0;
    let flag = false;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (q[j] > q[j + 1]) {
                let tmp = q[j];
                mapa.set(tmp, ++aux);
                q[j] = q[j + 1];
                q[j + 1] = tmp;
                result++;
                if (mapa.get(tmp) > 2) {
                    flag = true;
                    break;
                };
            } else {
                aux = 0;
            }
        }

        if (flag) break;
    }
    if (flag) console.log("Too chaotic");
    else console.log(result);
};


module.exports = minimumBribes;