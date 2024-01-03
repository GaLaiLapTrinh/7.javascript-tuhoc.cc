// Yêu cầu người dùng nhập bán kính từ bàn phím
let r = Number(prompt("Nhập bán kính của đường tròn:"));
console.log(r);
console.log(typeof r);

// Tính chu vi và diện tích
let PI = Math.PI;
let chuVi = 2 * 3.14 * r;
let dienTich = 3.14 * r * r;

// in kết quả
console.log("Chu vi = " + chuVi);
console.log("Diện tích = " + dienTich);
