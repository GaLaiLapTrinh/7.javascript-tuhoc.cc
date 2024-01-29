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
