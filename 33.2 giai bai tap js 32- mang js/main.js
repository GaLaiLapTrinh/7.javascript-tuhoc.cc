//33. Bài tập JS 32:
/*
Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử, 
n do người dùng nhập từ bàn phím  
*/
// Khai báo mảng rỗng ban đầu
let M = [];
let n;
// Check điều kiện đảm bảo n là số nguyên > 0
while (true) {
  n = Number(
    prompt(`
  Mời nhập vào số phần tử của mảng
  Lưu ý: n phải là số nguyên > 0
  `)
  );

  // Kiểm tra n
  if (Number.isInteger(n) && n > 0) {
    // Chỉ khi n là số nguyên >0 thì thoát lặp
    break;
  }
}

console.log("Số phần tử của mảng là: " + n);
// Duyệt mảng và gán giá trị cho mảng
for (let i = 0; i < n; i++) {
  console.log(i);
  let input = Number(prompt(`Mời nhập vào phần tử thứ: ${i + 1} `));
  M.push(input);
}
// Xuất mảng sau khi nhập thành công
console.log(M);
