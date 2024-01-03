// Yêu cầu người dùng nhập điểm từ bàn phím
let diemToan = Number(prompt("Nhập điểm môn toán:"));
let diemVan = Number(prompt("Nhập điểm môn văn:"));
let diemAnh = Number(prompt("Nhập điểm môn anh:"));

// Tính điểm trung bình
let dtb = (diemAnh + diemToan + diemVan) / 3;

console.log("Điểm trung bình = " + dtb.toFixed(2));
