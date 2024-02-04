//28. Đệ quy trong js
// tính  N!=N*(N-1)!..1
function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

// Gọi hàm giai thừa
let ketQua = giaiThua(5);
console.log(ketQua);

// Ví dụ 2: tính Fibonacci
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}

// Gọi hàm
let ketQua2 = f(11);
console.log(ketQua2);
