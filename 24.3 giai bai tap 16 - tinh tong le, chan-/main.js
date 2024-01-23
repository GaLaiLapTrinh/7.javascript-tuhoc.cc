//24.3 giai bai tap 16 - tinh tổng số lẻ, chẵn
/*
Bài tập JS 16:  
       Viết chương trình nhập nhập số a từ bàn phím, 
Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a 
Nếu a lẻ thì in ra dòng chữ “tôi o tính tổng số lẻ, bye bye ” và thoát chương trình
*/
let a = Number(prompt("Nhập vào số a:"));
// Kiểm tra xem a có phải là số nguyên:
while (!Number.isInteger(a)) {
  a = Number(prompt("Nhập lại a, a phải là số nguyên:"));
}
console.log(a);

if (a % 2 === 0) {
  let sum = 0;
  for (let i = 0; i <= a; i += 2) {
    sum += i; //sum = sum +i;
  }
  alert(`Tổng các số chẵn từ 0 đến ${a} là ${sum}`);
} else {
  // nếu a lẻ
  alert("tôi o tính tổng số lẻ, bye bye");
}
