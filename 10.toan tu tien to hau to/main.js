// 010. Toán Tử Tăng/Giảm: Toán tử tiền tố hậu tố (++, --)
// - Dùng để tăng hoặc giảm giá trị của biến một đơn vị.
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++; // tương đương với a = a + 1; --> 100
b--; // tương đương với b = b - 1; --> 9
++c; // tương đương với c = c + 1; --> 78
--d; // tương đương với  = a + 1; --> 87
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// Phép tính đơn lẻ viết --, ++ trước hay sau biến đều được

// 2. Trường hợp biểu thức phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x); // 2
console.log(y); // 3
console.log(z); //-1
