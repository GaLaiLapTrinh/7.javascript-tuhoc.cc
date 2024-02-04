// 29.2 cắt chuỗi con trong js - slice vs substring
// 5.1 slice cắt chuỗi
let s4 = "234987657";
// CẮt chuỗi dùng slice
let s5 = s4.slice(2, 9); //cắt từ index 2 đến 9-1 = 8
console.log(s5);
// endIndex: Nếu không nhập sẽ ngầm định là cắt đến cuối chuỗi
// có thể hiểu ngầm định, thì endIndex = s4.length
console.log(s4.length);

// ví dụ: chỉ cho phép tin nhắn dài tối đa 20 ký tự,
// nếu quá thì tự cắt xuất chuỗi sau xử lý
/*
let s6 = prompt("Mời nhập vào chuỗi");
console.log(`Bạn đã nhập ${s6.length} ký tự`);
if (s6.length > 20) {
  console.log(`Bạn đã nhập quá ${s6.length - 20} ký tự`);
  let s7 = s6.slice(0, 20);
  console.log("Chuỗi sau xử lý: " + s7);
}

*/
// code online
// console.log("Chuỗi sau xử lý: " + prompt("Mời nhập vào chuỗi 2").slice(0, 20));

// 5.2  substring(startIndex, endIndex)
let s8 = "234987657";
// CẮt chuỗi dùng substring
let s9 = s8.substring(2, 9); //cắt từ index 2 đến 9-1 = 8
console.log(s5);

// So sánh slice() và substring()
/*
Đối số truyền vào  : 	
substring(start, end): Nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. Nếu end < start, chúng sẽ được đảo ngược      
slice(start, end): Cũng nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. Nếu end < start, chuỗi sẽ được xem như rỗng.
*/
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 4)); //123
console.log(s10.substring(4, 1)); //123
console.log("Sử dụng slice");
console.log(s10.slice(1, 4)); //123
console.log(s10.slice(4, 1)); //""
// "" (chuỗi rỗng, không đảo ngược vị trí start và end)

//Khác nhau khi Xử lý với số âm:
/*
substring(start, end): 
substring sẽ chuyển số âm thành 0 và 
nếu end < start sau khi chuyển số âm thì nó sẽ đảo ngược chúng.
*/
let s11 = "0123456789";
console.log("Sử dụng substring với tham số âm");
console.log(s11.substring(-3, -1));
//s11.substring(-3, -1) -> s11.substring(0, 0) -> ""
// TH2: substring nếu end < start đảo ngược vị trí start và end)
console.log("Trường hợp substring có 1 tham số âm, end <start");
console.log(s11.substring(4, -5));
//s11.substring(4, -5) --> s11.substring(4, 0) --> s11.substring(0, 4)

console.log("Sử dụng slice với tham số âm");
console.log(s11.slice(-3, -1)); //cắt từ -3 đến -2
// 78 do: lấy từ index -3 đến sát -1 (tức là -2)
