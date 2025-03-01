console.log("Hello Would")
function findGrades(M) {
    let grade;

    switch (true) {
        case (M >= 0 && M <= 10):
            grade = 'E';
            break;
        case (M >= 11 && M <= 20):
            grade = 'D';
            break;
        case (M >= 21 && M <= 30):
            grade = 'C';
            break;
        case (M >= 31 && M <= 40):
            grade = 'B';
            break;
        case (M >= 41 && M <= 50):
            grade = 'A';
            break;
        default:
            grade = 'Invalid Marks';
    }

    return grade;
}
