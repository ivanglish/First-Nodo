function everNoteFirst(input){

    var map= new Map();
    map.set(")","(");
    map.set("}","{");
    map.set("]","[");
    var list=[];
    let flag;
    let len = input.length;
    if (len===0) return true;
    for (let i = 0; i < len; i++) {
        let e = input.charAt(i);
        if (e==="(" || e==="{" || e==="["){
            list.push(e);
        }
        if (map.get(e)!==undefined){
            if (list[list.length-1]===undefined) return false;
            if(list[list.length-1]===map.get(e)) list.pop();
        }
    }   
    if (list.length>0) return false;
    else return true;
}

console.log(everNoteFirst("]asd{s}d"));