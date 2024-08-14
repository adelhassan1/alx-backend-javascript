export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.map((students) => students.id).reduce((prev, next) => prev + next, 0);
}
