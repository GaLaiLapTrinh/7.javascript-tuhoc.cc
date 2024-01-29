//25.5 - Giai bai tap js 22- Tinh n giai thua - function
/*
Sử dụng function - Viết chương trình nhập vào số nguyên n, in ra kết quả n! 
Dùng vòng lặp for 
Dùng vòng lặp while 
*/
/*
let n = Number(prompt("Nhập vào 1 số nguyên 0 âm"));
// kiểm tra tính hợp lệ của n, sai bắt nhập lại
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Số không hợp lệ, vui lòng nhập lại:"));
}

//1. Dùng vòng lặp for
let gt = 1;
for (let i = 1; i <= n; i++) {
  console.log(i);
  gt *= i;
  //gt = gt*i;
}

console.log(n + "! =" + gt);
*/

// 2. Dùng vòng lặp while
/*
let gt = 1;
let i = 1;

while (i <= n) {
  gt *= i; // gt = gt*i;
  console.log(i);
  i++;
}
console.log(n + "! =" + gt);
*/

function tinhGiaiThuaFor(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

function tinhGiaiThuaWhile(n) {
  let gt = 1;
  let i = 1;

  while (i <= n) {
    gt *= i; // gt = gt*i;
    i++;
  }
  return gt;
}

// Nhập liệu
let n = Number(prompt("Nhập vào 1 số nguyên 0 âm"));
// kiểm tra tính hợp lệ của n, sai bắt nhập lại
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Số không hợp lệ, vui lòng nhập lại:"));
}

let ketQuaFor = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for = ${ketQuaFor}`);

let ketQuaFor2 = tinhGiaiThuaFor(5);
console.log(`${ketQuaFor2}`);

let ketQuaFor3 = tinhGiaiThuaFor(6);
console.log(`${ketQuaFor3}`);

let ketQuaWhile = tinhGiaiThuaWhile(n);
console.log(`${n}! sử dụng while = ${ketQuaWhile}`);
