class Student {
      constructor(name, lastName, yearOfBirth, marks, attendance) {
            this.name = name;
            this.lastName = lastName;
            this.yearOfBirth = yearOfBirth;
            this.marks = marks;
            this.attendance = attendance ? attendance : [];
      }

      getAge(){
            return new Date().getFullYear() - this.yearOfBirth;
      }

      getAverageMark(){
            return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
      }

      present(){
            if(this.attendance.length < 25){
                  this.attendance.push(true);
            }
      }

      absent(){
            if(this.attendance.length < 25){
                  this.attendance.push(false);
            }
      }

      summary(){
            const averageAttendance = +(this.attendance.reduce((sum, attendance) => attendance ? sum + 1 : sum, 0) / this.attendance.length).toFixed(2);

            if(this.getAverageMark() > 90 && averageAttendance > 0.9){
                  return "Молодець!";
            }

            if((this.getAverageMark() > 90 && averageAttendance < 0.9) || (this.getAverageMark() < 90 && averageAttendance > 0.9)){
                  return "Добре, але можна краще ";
            }

            if(this.getAverageMark() < 90 && averageAttendance < 0.9){
                  return "Редиска!";
            }

      }
}

const student = new Student('John', 'Smith', 1998, [100, 97, 82, 64, 78, 32, 76, 90], []);

console.log('Student 1:')

student.absent()
student.present();
student.present();
student.absent();

console.log(`The average mark: ${student.getAverageMark()}`) // 77.375
console.log(`The age: ${student.getAge()}`) // 25
console.log(student.summary()) // Редиска!

const student2 = new Student('John', 'Smith', 2000, [100, 97, 82, 98, 78, 100, 76, 90], []);

console.log('Student 2:')

student2.present();
student2.present();

console.log(`The average mark: ${student2.getAverageMark()}`) // 90.125
console.log(`The age: ${student2.getAge()}`) // 23
console.log(student2.summary()) // Молодець!

const student3 = new Student('John', 'Smith', 2000, [100, 97, 82, 98, 78, 100, 76, 90], []);

console.log('Student 3:')

student3.absent();
student3.absent();
student3.present();

console.log(`The average mark: ${student3.getAverageMark()}`) // 90.125
console.log(`The age: ${student3.getAge()}`) // 23
console.log(student3.summary()) // Добре, але можна краще