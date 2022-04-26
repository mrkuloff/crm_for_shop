"use strict";

const filter = (allStudents, failedStudents) => { //все студенты / кто не сдал экзамен
  const newAllStudnets = allStudents;
  const newFailedStudents = failedStudents;
  const pasStudent = newAllStudnets;

  for (const name in newAllStudnets) {
    if (newFailedStudents.includes(newAllStudnets[name])){
      pasStudent.splice(name,1);
    }
  }

  return pasStudent;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Васильев'];
const failedStudents = ['Петров', 'Кузнецов'];

console.log(filter(allStudents, failedStudents)); //Иванов, Сидоров
