/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    var gradesCount = grades[0];
    let roundto = 5;

    var newGrades = [];
    for (let i=1; i < grades.length; i++) {
        var grade = grades[i];
        var lastNumberOfGrade = +grade.toString().split("")[1];

        if (lastNumberOfGrade < 3 && lastNumberOfGrade > 5 || lastNumberOfGrade < 8) {

        }

        console.log(isMod3);
        if (grade>38) {
            grade = roundto * Math.round(grade/roundto);
        }
        newGrades.push(grade);
    }
    console.log(newGrades);

}

gradingStudents([4,73,67,38,33]);