//16.8 giai bai tap 12 -kiem tra quy
/*
Bài tập 12: Viết chương trình nhập vào tháng trong năm, 
cho biết tháng đó thuộc quý mấy
Gợi ý :
1 năm có 4 quý, mỗi quý 3 tháng :
	+ Quý 1 : tháng 1,2,3
	+ Quý 2 : tháng 4,5,6
	+ Quý 3 : tháng 7,8,9
	+ Quý 4 : tháng 10,11,12
*/

let thang = parseInt(prompt("Nhập vào 1 tháng trong năm(1-12):"));

if (thang >= 1 && thang <= 3) {
  console.log("Thang", thang, "thuộc quý 1");
} else if (thang >= 4 && thang <= 6) {
  console.log("Thang", thang, "thuộc quý 2");
} else if (thang >= 7 && thang <= 9) {
  console.log("Thang", thang, "thuộc quý 3");
} else if (thang >= 10 && thang <= 12) {
  console.log("Thang", thang, "thuộc quý 4");
} else {
  console.log("Tháng không hợp lệ");
}
