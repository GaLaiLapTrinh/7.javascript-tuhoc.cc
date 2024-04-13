//34.13 - javascript inheritance es6
// Định nghĩa lớp cơ sở School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }

  // Phương thức của lớp school
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Lớp Student kế thừa từ lớp School  ( có thêm thuộc tính và phương thức riêng)
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }

  // Phương thức của lớp student
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

// Tạo đối tượng của lớp school
const p1 = new School("P2004001", "jacky", 2000);
// Truy cập thuộc tính và phương thức của class School
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

// Tạo đối tượng của sub class Student
const s1 = new Student("P2004002", "nguyen van nam", 2001, "Computer Science");
// Truy cập thuộc tính và phương thức của class School
console.log(s1.id);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));

// Truy cập thuộc tính và phương thức của sub Class Student
console.log(s1.major);
s1.study();

console.log(s1);
