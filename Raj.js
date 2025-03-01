function Triangle_Check(A, B, C) {
    if (A + B + C !== 180) {
        return "Invalid Triangle";
    }
    if (A < 90 && B < 90 && C < 90) {
        return "Acute";
    } else {
        return "Obtuse";
    }
}

// Example usage
let A = parseInt(prompt("Enter first angle: "), 10);
let B = parseInt(prompt("Enter second angle: "), 10);
let C = parseInt(prompt("Enter third angle: "), 10);
console.log(Triangle_Check(A, B, C));
