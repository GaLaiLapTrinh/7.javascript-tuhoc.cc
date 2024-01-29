//26 Phạm vi sử dụng (Scope) - JavaScript Scope:
/*
1. global scope : Phạm vi toàn cục, truy xuất được ở mọi nơi
2. function-scope: phạm vi của hàm.
3. block-scope : phạm vi của khối (block)
chẳng hạn như trong một if statement hoặc vòng lặp.
*/

// Global Scope
let a = 1;
// truy xuất thử đến biến a
console.log(a);

function viDu_1() {
  // Có thể truy xuất biến global ở trong hàm
  console.log(a);
  // Thử với phạm vi block scope
  if (a % 2 === 0) {
    console.log(`${a} là số chẵn`);
  } else {
    console.log(`${a} là số lẻ`);
  }
}
// Gọi hàm
viDu_1();

// 2. Function Scope:
function viDu_2() {
  let b = 2;
  // 1. Biến b chỉ có thể truy xuất từ bên trong hàm
  console.log(b);
  // 2. truy xuất được từ các cấp sâu hơn bên trong
  if (b % 2 === 0) {
    console.log(`${b} là số chẵn`);
  } else {
    console.log(`${b} là số lẻ`);
  }
}

// ngoài hàm
// console.log(b);

viDu_2();

// 3. Block Scope: biến được khai báo trong {}
let n = 3;
let m = 10;
if (n === 3) {
  let m = 1;
  console.log(m);
  if (m % 2 === 0) {
    console.log(`${m} là số chẵn`);
  } else {
    console.log(`${m} là số lẻ`);
  }
}

console.log(m);
