//25.2 Tìm hiểu thêm về các cách khai báo hàm
// 2.1 function declaration( )
// Function declaration
function tenFunction(parameters) {
  // Thân hàm
  // return something;
}
// Khai báo hàm
function tong(a = 0, b = 0) {
  return a + b;
}
// Gọi hàm
console.log(tong(5, 3));

// 2.2 Function expression
// Function expression
let ten_bien = function (parameters) {
  // Thân hàm
  // return something;
};
// khai báo
let tich = function (a = 1, b = 1) {
  return a * b;
};
// Gọi hàm
console.log(tich(3, 5));

// Bài 25.3 : 2.3 Arrow function
/*
Arrow function là một cú pháp viết ngắn của hàm trong JavaScript, 
được giới thiệu trong ECMAScript 6 (ES6). 
Arrow function giúp viết mã ngắn gọn hơn và có cú pháp rõ ràng hơn
*/
//Function expression
let multiply = function (a, b) {
  return a * b;
};
// Gọi hàm
console.log(multiply(5, 4));

// Arrow function (hàm mũi tên)
let multiplyArrow = (a, b) => a * b;
// Gọi hàm
console.log(multiplyArrow(5, 5));

// Tuy nhiên với trường hợp hàm phức tạp, cần thêm khối {}
// Function Expression
let multiplyAndAdd = function (a, b) {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

// Arrow function
let multiplyAndAddArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

// Gọi hàm
console.log(multiplyAndAdd(3, 5)); // 23
console.log(multiplyAndAddArrow(3, 5)); // 23
