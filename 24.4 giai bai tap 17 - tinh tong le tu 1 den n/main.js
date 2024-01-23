//24.4 giai bai tap 17 - tinh tổng số lẻ từ 1 đến n
/*
Bài tập JS 17:  
       Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
Nhập n = 7, Bỏ qua không cộng tổng với số 3 => in ra kết quả 
	(gợi ý đáp án : 1+5+7 =13)
Thử break khi vòng lặp chạy đến giá trị n=3
*/

let n = Number(prompt("Nhập số n:"));

// kiểm tra xem n có phải là số nguyên
while (!Number.isInteger(n)) {
  n = Number(prompt("Nhập lại n, n phải là số nguyên:"));
}
console.log(n);

let sum = 0;
for (let i = 1; i <= n; i += 2) {
  console.log(i);
  if (i === 3) {
    //     continue;
    break;
  }
  sum += i; // sum = sum +i;
}
alert(`Tổng các số lẻ từ 1 đến ${n} (loại trừ 3) là ${sum}`);
