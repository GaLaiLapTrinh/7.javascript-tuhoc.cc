//32.6 Phương thức sort()
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
*/

// 14. Phương thức sort()
//14.1 Khi không truyền compareFunction
let M1 = ["b", "a", "c"];
// Để xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
// Duyệt mảng để xem
for (let element of M1) {
  // console.log(element);
  console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}

let sortedM1 = M1.sort();
console.log(sortedM1);
/*
Trường hợp 2: phần tử có nhiều ký tự: So sánh các ký tự đầu để xếp
Nếu ký tự giống nhau, so tiếp đến ký tự phía sau, 
mã unicode thấp hơn xếp trước
*/
let M2 = ["aaa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

// Ví dụ với ký tự số (vì xếp theo unicode nên kq không như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3); // [1, 10000, 9]
console.log("1".charCodeAt()); // 49
console.log("9".charCodeAt()); // 57
console.log("0".charCodeAt()); // 48

// 14.2 so sánh với hàm so sánh Compare Function
/*
Hàm So sánh (Compare Function):
Nếu compareFunction(a, b) trả về một giá trị < 0, a sẽ được đặt trước b.
Nếu compareFunction(a, b) trả về 0, thứ tự giữa a và b không thay đổi.
Nếu compareFunction(a, b) trả về một giá trị > 0, b sẽ được đặt trước a.
*/

let M4 = [9, 3, 5, 4];
// Trước khi sắp xếp
console.log(M4);
// Sx tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4); // Output: [3, 4, 5, 9]
// SX giảm dần
let sortedM5 = M4.sort((a, b) => b - a); // 5, 4, 3
console.log(sortedM5); // Output: [9, 5, 4, 3]
