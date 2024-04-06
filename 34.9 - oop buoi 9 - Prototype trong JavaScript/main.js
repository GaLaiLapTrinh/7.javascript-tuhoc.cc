//34.9 - oop buoi 9 - Prototype trong JavaScript
// Mảng thực chất có kiểu dữ liệu là object (xem lại bài 32.1)
// Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

// Rõ ràng mảng M rỗng,
// nhưng vì kế thừa các phương thức và thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính
// và phương thức từ nguyên mẫu cha mẹ
console.log(M.length);
M.push(4);
console.log(M);
console.log(M.toString());

//Quay trở lại ví dụ đối tượng student
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");

console.log(sv1);
