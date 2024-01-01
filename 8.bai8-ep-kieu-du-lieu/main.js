//08. ép kiểu dữ liệu:
// xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời cụ nhập vào numberA: ");
// check thử kiểu loại biến numberA
console.log(typeof numberA);
// thử thực hiện tính toán ( nếu chưa ép kiểu )
let numberB = 5;
console.log(typeof numberB);
// cộng A với B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);
// vd a = 8, kết quả 85 --> sai, js hiểu là cộng chuỗi
// Các phép tính khác
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào dùng prompt
// xuất thông báo cho người dùng nhập vào số C
let numberC = parseInt(prompt("Mời cụ nhập vào numberC: "));
console.log(numberC);
console.log(typeof numberC);
console.log(numberC + numberB);

// ép sang kiểu số thực Float
let numberD = parseFloat(prompt("Mời cụ nhập numberD: "));
// kiểm tra kiểu dữ liệu của numberD
console.log("kiểu dữ liệu của numberD: " + typeof numberD);
console.log(numberB + numberD);

// Hoặc đơn giản dùng hàm Number() để ép --> Kiểu dữ liệu number
let numberE = Number(prompt("Mời cụ nhập numberE: "));
// kiểm tra kiểu dữ liệu của numberE
console.log("kiểu dữ liệu của numberE: " + typeof numberE);
console.log(numberB + numberE);
