//24.8 giai bai tap 21 - Kiểm tra số nguyên tố
/*
   Bài tập JS 21:  
       Viết chương trình nhập nhập số nguyên a> 0 từ bàn phím 
Cho biết đó có phải số ng tố  
    ( số ng tố là số >1, và chỉ chia hết cho 1 và chính nó ) 
    Ví dụ số nguyên tố: 3, 5, 7 ...
Kết thúc chương trình hỏi người dùng: 
Bạn có muốn tiếp tục sử dụng phần mềm không? 
Nếu chọn không thì thoát chương trình
*/

while (true) {
  // Bước 1: Nhập số nguyên a từ người dùng
  let a = Number(prompt("Nhập 1 số nguyên dương a"));

  // Bước 2: Kiểm tra xem a có phải là số nguyên dương hay không
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Nhập lại a, a phải là số nguyên dương"));
  }
  //   alert("Giá trị a hợp lệ, a =" + a);
  // Bước 3: Kiểm tra xem a có phải là số nguyên tố hay không
  let isPrime = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Bước 4: Hiển thị kết quả
  if (isPrime) {
    alert(a + " là số nguyên tố");
  } else {
    alert(a + " không phải số nguyên tố");
  }

  // Bước 5: Hỏi người dùng có muốn tiếp tục không
  let answer = prompt(`
  Bạn có muốn tiếp tục không?
  Nhập "no" để thoát
  Bấm phím bất kỳ để tiếp tục 
  `);
  if (answer.toLowerCase() === "no") {
    break;
  }
}
