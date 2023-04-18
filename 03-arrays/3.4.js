let arr = [70, 1, 2, 78, 24, 7, -5];
let min = arr[0]; //70
let max = arr[0]; //70
for (let x of arr) {
    if (min > x) {
        min = x;
    }else if (max < x){
        max = x;
    }
}

console.log("le minimum " + min)
console.log("le maximum " + max)