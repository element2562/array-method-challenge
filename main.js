const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
integers.sort(function(a, b) {return b - a});
const lessNums = integers.filter(item => {
    const removeNum = (item <= 19);
    return removeNum
})
console.log(integers);
console.log(lessNums);
const alteredNums = lessNums.map(key => {
    return key * 1.5 - 1;
})
console.log(alteredNums);
const totalNum = alteredNums.reduce(function(a, b){return a + b})
console.log(totalNum);
/////////////////////////////////////////////////////////////////

