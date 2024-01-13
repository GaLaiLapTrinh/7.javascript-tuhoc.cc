//bài 16.6 giai bai tap 10
/*
Bài tập 10: Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ từ 1 – 12 
=> Cho biết tháng đó có bao nhiêu ngày ?
Gợi ý :
_ Tháng 1,3,5,7,8,10,12 có 31 ngày 
_ Tháng  4,6,9,11 có 30 ngày 
_ Nếu tháng 2 thì yêu cầu nhập thêm năm: 
	+ nếu năm nhuận thì tháng 2 có 29 ngày
	+ năm không  nhuận thì tháng 2 có 28 ngày 

Năm nhuận là năm
 (chia hết cho 4, và không chia hết cho 100) hoặc ( chia hết cho 400)
((nam %4 ===0) && (nam %100 !==0)) || ( nam %400 ===0) 
Case test : 
	   Năm nhuận : 2004, 2008, 2012, 2016, 2020, 2024
 	   Năm không nhuận : 1900, 2005
*/
// Nhập tháng từ người dùng
let month = parseInt(prompt("Nhập vào 1 tháng (1-12):"));

// Kiểm tra tính hợp lệ của tháng nhập vào
console.log(isNaN(month));
console.log(!isNaN(month));
if (!isNaN(month) && month >= 1 && month <= 12) {
  // Kiểm tra tháng có bao nhiêu ngày
  // Nếu là tháng 2, yêu cầu nhập thêm năm
  if (month === 2) {
    let nam = parseInt(prompt("Nhập vào 1 năm: "));
    // Kiểm tra năm nhuận
    let checkNamNhuan = (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0;
    console.log("Check năm nhuận là: " + checkNamNhuan);
    // Hiển thị kết quả số ngày trong tháng 2
    if (checkNamNhuan) {
      console.log("Tháng 2 năm " + nam + " có 29 ngày");
    } else {
      console.log("Tháng 2 năm " + nam + " có 28 ngày");
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("Tháng " + month + " có 30 ngày");
  } else {
    console.log("Tháng " + month + " có 31 ngày");
  }
} else {
  console.log("Tháng không hợp lệ, Vui lòng nhập lại từ 1-12");
}
