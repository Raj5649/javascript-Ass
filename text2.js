function findGrades(M) {
    switch (true) {
        case (M <= 10):
            return 'E';
        case (M <= 20):
            return 'D';
        case (M <= 30):
            return 'C';
        case (M <= 40):
            return 'B';
        case (M <= 50):
            return 'A';
        default:
            return 'Invalid';
    }
}

// Example usage
let M = parseInt(prompt("Enter marks: "), 10);
console.log(findGrades(M));
