function findSndSmallest(X, Y, Z) {
    let nums = [X, Y, Z];
    nums.sort((a, b) => a - b);
    return nums[1];
}

// Example usage
let X = parseInt(prompt("Enter first number: "), 10);
let Y = parseInt(prompt("Enter second number: "), 10);
let Z = parseInt(prompt("Enter third number: "), 10);
console.log(findSndSmallest(X, Y, Z));
