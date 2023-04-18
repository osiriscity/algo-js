function multiRand(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(rand10());
    }
    return arr;
}


//const n = parseInt(prompt("How many random numbers do you want to generate?"));

//const arr = multiRand(n);

//console.log(arr.join(", "));