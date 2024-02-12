//31.2 Date Set Methods, dinh dang va xuat thoi gian
// 4. set thời gian theo ý muốn
//Cách 1 : new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let myDate1 = new Date(2024, 1, 14);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

//Cách 2 : new Date(dateString)
let myDate2 = new Date("2024-02-15T12:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// Cách 3: Sử dụng setFullYear, setMonth, setDate
let myDate3 = new Date();
console.log(myDate3);
myDate3.setFullYear(2023);
myDate3.setMonth(9);
myDate3.setDate(9);
console.log(myDate3);
// 5. Xuất ngày tháng năm :
// Xuất dùng phương thức toLocaleDateString()
console.log(myDate3.toLocaleDateString());

// Xuất ngày tháng năm theo định dạng mong muốn(tự code):
console.log(`
Ngày ${myDate3.getDate()}/Tháng ${
  myDate3.getMonth() + 1
}/Năm ${myDate3.getFullYear()}
`);

// Thêm số 0 để xuất ngày tháng dạng 01, 02 ...
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
console.log(`
Ngày ${prefixDate}${myDate3.getDate()}/Tháng ${prefixMonth}${
  myDate3.getMonth() + 1
}/Năm ${myDate3.getFullYear()}
`);
