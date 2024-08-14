export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((items) => items.location === city);
}
