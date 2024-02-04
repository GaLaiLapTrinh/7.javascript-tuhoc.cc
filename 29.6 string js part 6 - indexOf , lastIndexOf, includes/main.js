//29.6 indexOf , lastIndexOf, includes
// 5.12 string.indexOf(searchValue, fromIndex);
// tìm kiếm (searchValue) trong chuỗi.
//Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
/*
fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ đầu chuỗi.
*/
let s25 = "abcdef abcdef";
let s26 = s25.indexOf("d");
console.log(s26);
// Tìm chữ "c" nhưng bắt đầu từ vị trí index 3
console.log(s25.indexOf("d", 3));
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);

//5.13 string.lastIndexOf(searchValue, endIndex);
/*
tìm kiếm giá trị xuất hiện cuối cùng của chuỗi tìm kiếm (searchValue) trong chuỗi gốc. 
Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
endIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái. 
Nếu không được cung cấp, tìm kiếm toàn bộ chuỗi.
*/
let s27 = "abcdef abcdef";
let s28 = s27.lastIndexOf("ab");
console.log(s28);
// Tìm với tham số endIndex (tìm trong đoạn từ index 0 -> endIndex)
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));

// 5.14  string.includes(searchString[, fromIndex]);
/*
Kiểm tra chuỗi con
kiểm tra string có chứa cụm searchString hay không
fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không nhập, tìm kiếm toàn bộ chuỗi
*/
let s29 = "abcdef abcdef";
console.log(s29.includes("a"));
console.log(s29.includes("g"));
// Tìm a bắt đầu từ vị trí index 8 (tìm trong bcdef)
console.log(s29.includes("a", 8));
