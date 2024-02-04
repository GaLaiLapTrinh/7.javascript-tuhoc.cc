//29.4 concat(), toUpperCase(), toLowerCase(), charAt()

// 5.6 concat: nối chuỗi
//let newString = string1.concat(string2, string3, ..., stringN);
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

// 5.7 toUpperCase() : chuyển toàn bộ sang viết hoa
let s18 = "Chào các bạn, tôi hỌC TẠI Tuhoc.cc";
console.log(s18.toUpperCase());

//5.8 toLowerCase() chuyển toàn bộ chuỗi sang viết thường
console.log(s18.toLowerCase());

// 5.9 charAt(index)
//-> Trả về chuỗi nằm ở vị trí index được truyền vào
//string.charAt(index);
let s19 = "Hello";
console.log(s19.charAt(4));
