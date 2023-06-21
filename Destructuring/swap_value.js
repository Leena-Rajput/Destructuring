function swap(a,b){
    [a,b] = [b,a]
    return [a,b];
}
let x=34;
let y=76;
[x,y]=swap(x,y);
console.log(x,y);