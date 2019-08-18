function jumpingOnClouds(c) {
let zeros=0;
let way=0;
for (let index = 0; index < c.length; index++) {
    const element = c[index];
    if (index>0){
        if (element==0) {
            way++;
            zeros++;
            if (zeros==3) {
                way--;
                zeros=1;
            }
        }
        else{
            zeros=0;
        }
    }else{
        if (element==0) zeros++;
    }
}
return way;
}

module.exports = jumpingOnClouds;
