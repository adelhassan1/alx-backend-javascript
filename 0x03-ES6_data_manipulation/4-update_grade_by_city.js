export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
