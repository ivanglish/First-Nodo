
module.exports.simpleArraySum = function (array){
        let result=0;
        array.forEach(element => {
            result+=element;
            
        });
        console.log(result);
        return result;
}
//simpleArraySum([1 ,2 ,3 ,4 ,10, 11]);

