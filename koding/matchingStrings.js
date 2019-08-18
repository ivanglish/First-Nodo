function matchingStrings(strings, queries) {
    let map=new Map();
    strings.forEach(e => {
        if (map.get(e)===undefined)  {
            map.set(e, 1);
        }else{
            map.set(e, map.get(e)+1);
        }
    });
    queries.forEach(element => {
        if (map.get(element)!==undefined) {
            console.log(map.get(element));
        }else{
            console.log(0);
        }
    });
}

matchingStrings(["aba","baba","aba","xzxb"],["aba","xzxb","ab"])

module.exports = matchingStrings;