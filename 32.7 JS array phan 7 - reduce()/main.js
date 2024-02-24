//32.7 Phương thức reduce()
/*
A. Các phương thức phần 1 (bài 32.2)
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
B. Các phương thức phần 2 (Bài 32.3)
8   indexOf()
9   lastIndexOf()
10  reverse()
11  join(separator)
C. Các phương thức phần 3 (Bài 32.4)
12 splice()
-----------Bài 32.5 -------------
13 Toán tử Spread (...) - ES6
-----------Bài 32.6 -------------
14 sort()
-----------Bài 32.7 -------------
15 reduce()
*/

// 15. Phương thức reduce()
//dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau tính toán
/*
Syntax : reduce(function, [initialValue]) 
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue : Giá trị khởi tạo
*/

// Bài toán khi không dùng reduce()
let M1 = [3, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
//1.Giá trị khởi tạo ban đầu
let sum = 0;
for (let element of M1) {
  sum += element;
}
console.log("Tổng các phần tử trong mảng: " + sum);

// Khi dùng reduce()
/*
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm .
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được reduce.
*/
// let M1 = [3, 2, 3];
/*
1.Tham số thứ 2: initialValue giá trị khởi tạo của accumulator ban đầu,
2. Nếu bỏ trống initialValue: 
  a. accumulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo, 
    và sẽ bắt đầu thực hiện từ phần tử thứ 2
  b. Nếu mảng trống mà 0 có giá trị initialValue --> reduce() Sẽ báo lỗi
*/

let sum2 = M1.reduce(
  // Tham số thứ 1: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  }
  // Tham số thứ 2: initialValue
);
console.log(sum2);

// Rút gọn lại
let sum3 = M1.reduce((a, b) => a + b, 0);

console.log(sum3);
