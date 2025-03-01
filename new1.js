function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    } else {
        return Math.max(A, B, C);
    }
}

// Example usage
let A = parseInt(prompt("Enter first number: "), 10);
let B = parseInt(prompt("Enter second number: "), 10);
let C = parseInt(prompt("Enter third number: "), 10);
console.log(Max_out_of_three(A, B, C));
