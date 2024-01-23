//24.2 giai bai tap 15 - tinh n!
/*
Bài tập JS 15:  
Viết chương trình nhập vào số nguyên n, in ra kết quả n! 
1. Dùng vòng lặp for 
2. Dùng vòng lặp while 
*/

// Kiểm tra 1 số có phải là số nguyên
// let a = 8.1;
// if (a % 1 === 0) {
//   console.log(`${a} là số nguyên`);
// } else {
//   console.log(`${a} 0 phải là số nguyên`);
// }

// console.log(Number.isInteger("abc"))

// giải bài tập
let n = Number(prompt("Nhập vào 1 số nguyên 0 âm"));
// kiểm tra tính hợp lệ của n, sai bắt nhập lại
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Số không hợp lệ, vui lòng nhập lại:"));
}
// console.log(n);

// 1. Dùng vòng lặp for
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   gt *= i;
//   //gt = gt*i;
// }

// console.log(n + "! =" + gt);

// 2. Dùng vòng lặp while
let gt = 1;
let i = 1;

while (i <= n) {
  gt *= i; // gt = gt*i;
  console.log(i);
  i++;
}
console.log(n + "! =" + gt);
