module.exports.repeatedString = function (s, n) {
    let result = 0;
    let oc = 0;
    let resto = 0;
    let suma = 0;
    let varia = 0;
    if (s.match(/a/g)===null) return 0;
    oc = s.match(/a/g).length;
    varia = Math.floor(n / s.length);
    resto = n % s.length;
    if (oc != 0) {
        result = oc * varia;
        for (var i = 0; i < resto; i++) {
            if (s.charAt(i) == "a") suma++;
        }
        return Math.trunc(suma + result);
    }
    return Math.trunc(result);
}
