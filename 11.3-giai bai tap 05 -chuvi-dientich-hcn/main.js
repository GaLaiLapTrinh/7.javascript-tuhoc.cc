// Yêu cầu người dùng nhập chiều dài và chiều rộng từ bàn phím
let a = Number(prompt("Nhập chiều dài hình chữ nhật:"));
let b = Number(prompt("Nhập chiều rộng hình chữ nhật:"));

// Tính chu vi và diện tích
let chuVi = (a + b) * 2;
let dienTich = a * b;

// In kết quả
console.log("Chu vi = " + chuVi);
console.log("Diện tích = " + dienTich);
