//25.1 function (hàm) trong js
/*
Bài toán: Tính tổng 2 số
a. 7 , 5 
b. 9, 6
c. 10, 5
*/
// a. 7 , 5
let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// b. 9, 6
let a1 = 9;
let b1 = 6;
let tong1 = a + b;
console.log(tong1);

// 1. khai báo function
// Bước 1: Khai báo
function tenFunction() {
  // Mã lệnh thực hiện một nhiệm vụ nào đó
}
// Bước 2: Gọi hàm - khi cần sử dụng
tenFunction();
// 2. Ví dụ đơn giản
// khai báo
function xinChao() {
  console.log("Chào mừng đến với tuhoc.cc");
}
// Bước 2: Gọi hàm
xinChao();
xinChao();

// 3. function với tham số (parameters)
// let inputName = prompt("Mời nhập vào tên của bạn:");
// Khai báo hàm
function xinChao2(name) {
  console.log(`Chào mừng ${name} đến với tuhoc.cc`);
}
// Gọi hàm
// xinChao2(inputName);
xinChao2("Trần như nhộng");
console.log(xinChao2("Trần như nhộng"));

// Ví dụ 2 về parameters
function tinhTong(a, b) {
  // let ketQua = a + b;
  // return ketQua;
  return a + b;
}

// gọi hàm
console.log(tinhTong(5, 7));
// gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(`tongDiem = ${tongDiem}`);
console.log(`DTB = ${tongDiem / 2}`);

// Chú ý :
//Thân hàm nếu không có return thì giá trị trả về là undefined
// 5. Truyền giá trị mặc định cho parameters
console.log(tinhTong(10));
function tinhTong2(a = 0, b = 0) {
  return a + b;
}
console.log(tinhTong2(5));
