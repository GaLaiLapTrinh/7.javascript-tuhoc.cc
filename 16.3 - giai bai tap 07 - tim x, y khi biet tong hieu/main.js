//bài 16.3 - giai bai tap 07 - tim x, y khi biet tong hieu
/*
Bài tập 07: Tìm x, y khi biết tổng và hiệu của chúng 
case test : Tong = 14 ,hieu = 4 => x=9, y = 5 
case 2     : Tong = 8 hieu = 5 => x=6.5, y = 1.5
Gợi ý :   
x + y = tong
x -  y = hieu
Phân tích toán học :
Cộng vế: 2x = tong+hieu --> x = (tong+hieu) / 2
từ phương trình 2 --> y = x - hieu
*/

// Nhập liệu từ bàn phím
let tong = Number(prompt("Mời cụ nhập tổng 2 số:"));
let hieu = Number(prompt("Mời cụ nhập hiệu 2 số:"));

// Tính giá trị của x
let x = (tong + hieu) / 2;

// Tính giá trị của y
let y = x - hieu;

// Xuất kết quả
console.log("x = " + x);
console.log("y = " + y);
