let min = prompt("Enter a minimum number.");
let max = prompt("Enter a maximum number.");
if (min < max) {
    let current = prompt("Enter a current number");
    if ((current > min) && (current < max)){
        alert(current + " is between " + min + " and " + max);
    } else {
        alert(current + " is not between " + min + " and " + max);
    }
} else{
    alert("You are not very smart... Try again!");
}