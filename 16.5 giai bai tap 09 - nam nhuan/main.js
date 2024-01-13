//bài 16.5 giai bai tap 09 - nam nhuan
/*
Bài tập 09: Viết chương trình nhập vào 1 năm dương lịch, 
kiểm tra năm đó có phải năm nhuận hay không .
Gợi ý : Năm nhuận là năm
 (chia hết cho 4, và không chia hết cho 100) hoặc ( chia hết cho 400)
((nam %4 ===0) && (nam %100 !==0)) || ( nam %400 ===0) 

Case test : 
	   Năm nhuận : 2004, 2008, 2012, 2016, 2020, 2024
 	   Năm không nhuận : 1900, 2005

*/

let nam = Number(prompt("Mời nhập vào 1 năm dương lịch:"));

if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log(`${nam} là năm nhuận`);
} else {
  console.log(`${nam} không phải là năm nhuận`);
}
