// 14. hàm isNan, Number

// 8.hàm Number(value) --> Chuyển value sang số
//--> Nếu không chuyển được trả về NaN
var str = "123";
var num = Number(str);
console.log(`num, kiểu dữ liệu ${typeof num}`); // Kết quả: 123

var invalidStr = "abc";
var invalidNum = Number(invalidStr);
console.log(invalidNum);
// Kết quả: NaN (Not a Number) do chuỗi không thể chuyển đổi thành số

//9. isNaN(value) :
console.log(isNaN("abc")); // true
console.log(isNaN("123")); //false --> Do string "123" --> Chuyển đổi được thành số
console.log(isNaN(123)); // false
console.log(isNaN("NaN")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN("blabla")); // true
console.log(isNaN(true)); // false, this is coerced to 1
// note thử chuyển true sang số
let convertTrue = Number(true);
console.log(`giá trị sau chuyển là: ${convertTrue}`);
console.log(isNaN(null)); // false, this is coerced to 0
console.log(isNaN("")); // false, this is coerced to 0
console.log(isNaN(" ")); // false, this is coerced to 0

//10. Number.isNaN: được giới thiệu trong ECMAScript 2015 (ES6).
//Phương thức này chỉ trả về `true` nếu value hoặc biểu thức truyền vào có giá trị NaN.
console.log(Number.isNaN(NaN));
// <- true, NaN is NaN
console.log(Number.isNaN("pony" / "foo"));
// <- true, 'pony'/'foo' is NaN, NaN is NaN
let check = "pony" / "foo";
console.log(`giá trị của biến check: ${check}`);

console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN({})); // <- false, {} is not NaN
console.log(Number.isNaN("ponyfoo")); // <- false, 'ponyfoo' is not NaN
