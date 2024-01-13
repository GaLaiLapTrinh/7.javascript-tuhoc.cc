// 13.  các hàm toán học thông dụng
// 1. Hàm `Math.sqrt()`
let a = Math.sqrt(4);
console.log(a);

// 2. Hàm `Math.pow(base, exponent)`
let b = Math.pow(2, 3);
console.log(b);

//3. Hàm `Math.abs()`
let c = Math.abs(10);
console.log(c);

// 4. Hàm `Math.ceil()` và `Math.floor()`
let d = Math.floor(5.004);
console.log(d);

// 5. Hàm `Math.round()` , từ 0.5 làm tròn thành 1
let e = Math.round(7.4999999999);
console.log(e);

//6. làm tròn x chữ số phần đơn vị
let f = 3.14159;
let fRounded = Number(f.toFixed(2));
console.log(fRounded);
console.log(typeof fRounded);
// cộng thử
let g = fRounded + 5;
console.log(g);

// 7. Hàm `Math.min()` và `Math.max()`
let h = Math.min(1, 2, 3, 5, 8, 4, 80, 100);
console.log(h);
