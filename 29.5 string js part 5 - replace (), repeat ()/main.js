//29.5 replace (oldValue, newValue) repeat (count) in JS
// 5.8 string.replace(oldValue, newValue);
let s14 = "123 học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));

// Để thay thế tất cả dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/học/g, "ngủ"));

// 5.13 string.repeat(count);
/*
count: Số lần lặp lại chuỗi. 
*/
let s23 = "Hello, ";
let s24 = s23.repeat(3);
console.log(s24); // Hello, Hello, Hello,
