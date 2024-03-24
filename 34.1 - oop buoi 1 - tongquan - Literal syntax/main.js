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
