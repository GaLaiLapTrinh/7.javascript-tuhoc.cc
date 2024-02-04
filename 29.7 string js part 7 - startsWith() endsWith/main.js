//29.7 startsWith() endsWith
// 5.15 string.startsWith(searchValue,[startIndex]);
/*
Kiểm tra chuỗi string có bắt đầu bằng searchString không?
startIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không nhập, nó sẽ bắt đầu từ đầu chuỗi.
*/
let s30 = "abcdef abcdef";
console.log(s30.startsWith("ab"));

// Tìm từ vị trí index số 1 xem có phải bắt đầu bằng chuỗi bc?
console.log(s30.startsWith("bc", 1));

//5.16 string.endsWith(searchValue,[endIndex]);
let s31 = "01234567890";
console.log(s31.endsWith("0"));
//endIndex =10, chuỗi được kiểm tra từ index 0 -> 10-1 = 9
console.log(s31.endsWith("9", 10));

// Ví dụ kiểm tra xem tên tệp âm thanh có kết thúc .mp3?
let tenTepTin = "nhac.mp4";
// Kiểm tra xem tệp tin có kết thúc bằng ".mp3" hay không
if (tenTepTin.endsWith(".mp3")) {
  console.log("Tệp tin là file âm thanh .mp3");
} else {
  console.log("Tệp tin không phải là file âm thanh .mp3");
}
