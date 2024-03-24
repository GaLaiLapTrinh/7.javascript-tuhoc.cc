// #####34.1 - oop buoi 1 - tổng quan - Literal syntax #####
// Ôn tập kiến thức cũ
let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);

let str = "Hôm nay tôi học obj";
console.log(typeof str);

M = ["hoa", "trang", "lan", "mai"];
console.log(typeof M);

// 2. khai báo đối tượng , literal syntax
let student = {
  // key + value
  // thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  // Phương thức được viết lại, để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  diemTrungBinh: function () {
    // tính tổng điểm
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    // Trả về dtb
    return sumScores / 3;
  },
};

let teacher = {
  "1 fullName": "Jacob",
  "@address": {
    city: "Hanoi",
    country: "VietNam",
  },
};

// Kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);

//#####34.2 #####
//2. Truy Cập Thuộc Tính : Dot Notation . và Bracket Notation []
// 2.1 Sử dụng dot (.) - Dot Notation
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// 2.2 Sử dụng [] -  Bracket Notation - và truyền vào giá trị của key
/*
Bracket Notation dùng khi key đặc biệt - 
có khoảng trắng, vi phạm quy tắc đặt tên biến....
*/
console.log(teacher["1 fullName"]);
console.log(student["address"]);

// Linh động sử dụng [] với biến
// let inputKey = prompt("Mời nhập key: (address,scores )");
let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey: ");
console.log(student[inputKey]);
// Nếu truy xuất đến 1 key không tồn tại sẽ trả về undefined
// Ví dụ nhập vào key : job  --> undefined

// Ví dụ : Kiểm tra xem nếu nhập key không tồn tại thì báo lỗi
// Xem lại bài 18: Truthy and Falsy Values
console.log(student[inputKey]);
console.log(Boolean(student[inputKey]));

if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("Key bạn nhập không tồn tại");
}

// 3.1 Truy cập phương thức
console.log("Truy cập phương thức ");
console.log(student.getAge());
console.log(student.diemTrungBinh());

/*
3.2 Vấn đề : (Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge 
--> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
*/

// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());

// Gọi phương thức getAge2
student.getAge2();

// Xuất thử tuổi thông qua thuộc tính age mới được thêm từ phương thức getAge2
console.log(student.age);



