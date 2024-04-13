//34.15 - oop buoi 15 - getter and setter
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score;
    //Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected,
    //và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
  }

  // Phương thức
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }

  // Getter cho thuộc tính score
  get score() {
    return this._score;
  }

  // Setter cho thuộc tính score
  set score(value) {
    // Thêm các biểu thức logic để kiểm tra
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}

// Tạo đối tượng
const john = new School("p2024001", "John", 2001, 95);
console.log(john.id);
console.log(john.birthYear);
console.log(john.name);
console.log(john._score); //không nên truy cập trực tiếp
console.log(john.calcAge(2024));

// Sử dụng getter
console.log(john.score);
// Dùng setter
john.score = 75;

console.log(john.score);
