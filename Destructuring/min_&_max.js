function maxMin(arr){
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
    };
}
const array=[3,7,13,5,8,9];
console.log(maxMin(array))