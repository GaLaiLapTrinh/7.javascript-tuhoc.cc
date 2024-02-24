//32.8 Phương thức filter()
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
-----------Bài 32.8 -------------
16 filter()
*/

// 16. Phương thức filter()
/*
Cú pháp:    array.filter( function)

function(currentValue, [currentIndex] , [array])
Hàm được gọi với những đối số sau: 
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được duyệt.
*/
let numbers = [1, 2, 3, 4, 5];
// Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
  // Function
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers); // Output: [2, 4]
