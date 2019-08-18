const matchy= require("../koding/simpleArraySum");
test("simpleArraySum - array sum", () => {
    //throw new Error("errando man");
    const result= matchy.simpleArraySum([1 ,2 ,3 ,4 ,10, 11]);
    expect(result).toBe(31);
});