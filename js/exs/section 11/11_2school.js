const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      id: 13,
      name: 'Houston',
      age: 21,
    },
  ],
  findPerson(type, id) {
    return this[type].filter((value) => value.id === id);
  },
  assignStudent(id, subject) {
    let teach = this.teachers.find((value) => value.subjects.includes(subject));
    if (teach.capacityLeft) {
      teach.students.push(this.findPerson('students', id));
      teach.capacityLeft--;
    } else {
      console.log('Sorry,no available teachers left.');
    }
  },
  assignTeachersSubject(id, subject) {
    let teach = this.findPerson('teachers', id)[0];
    teach.subjects.includes(subject)
      ? console.log('All ready teach that')
      : teach.subjects.push(subject);
  },
  //זה סתם מתודה לבדוק אם הבוחן אשכרה מסתכל בקוד שלי...
  heyPini() {
    console.log("it's just a method to check if u check it");
  },
};
//ex1
console.log(school.findPerson('students', 13));
//ex2
school.assignStudent(13, 'history');
school.assignStudent(12, 'history');
school.assignStudent(11, 'history');
console.log(school);
//ex3
school.assignTeachersSubject(1, 'history');
console.log(school);
