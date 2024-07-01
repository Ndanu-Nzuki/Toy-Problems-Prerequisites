function calculateStudentGrade() {
    let marks = prompt("Enter student marks");
    
    marks = Number(marks);
    
    //Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
     // Output the grade
     return(`The grade for ${marks} is ${grade}`);

    //Outputs error message incase value entered is less than 0, greater than 100 or is not an integer.
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Error, please enter a number between 0 and 100.");
        return;
   }
    
}

calculateStudentGrade();