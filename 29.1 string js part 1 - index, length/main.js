//29.1 string js part 1: khái quát, index, length
//1.các cách xuất chuỗi
console.log("xin chào, ABC, 123, !@#$");
console.log("xin chào, ABC, 123, !@#$");
console.log(`xin chào, ABC, 123, !@#$`);

// 2. khởi tạo chuỗi
let s1 = `Hồi đó tôi chê mồm e rộng
Không tin hai đứa chập mồm đo`;

console.log(s1);

let s2 = "Hồi đó tôi chê mồm e rộng\nKhông tin hai đứa chập mồm đo";
console.log(s2);
console.log(typeof s1);
console.log(typeof s2);

// 3. index chuỗi :Index bắt đầu từ 0
let ten = "Linh";
console.log(ten[2]);

// 4. string length
let s3 = "abcdef";
// kiểm tra chiều dài chuỗi s3
console.log(s3.length);

// 4.2 ví dụ vận dụng :
//nhập vào 1 tin nhắn, giới hạn ký tự nhập tối đa 140,
//nếu quá báo số ký tự vượt quá
let message = prompt("Mời nhập vào chuỗi");
if (message.length <= 140) {
  alert(`bạn đã nhập ${message.length} ký tự`);
} else {
  alert(`bạn đã nhập quá ${message.length - 140} ký tự `);
}
