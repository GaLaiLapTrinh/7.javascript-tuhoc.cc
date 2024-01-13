//bài 16.4 giai bai tap 08 - tinh BMI
/*
   Bài tập 08: Viết chương trình nhập vào chiều cao, cân nặng, 
   tính BMI và xuất ra thông báo
            BMI<15: Thân hình quá gầy
            BMI>=15 and BMI<16: Thân hình gầy
            BMI>=16 and BMI<18.5: Thân hình hơi gầy
            BMI>=18.5 and BMI<25:Thân hình bình thường
            BMI>=25 and BMI < 30:Thân hình hơi béo
            BMI >=30 and BMI<35:Thân hình béo
            BMI >=35:Thân hình quá béo
            Gợi ý cách tính : BMI=canNang/(chieuCao ^2 ) 
*/

// Nhập vào chiều cao và cân nặng từ bàn phím
let chieuCao = Number(prompt("Nhập chiều cao (m):"));
let canNang = Number(prompt("Nhập cân nặng (kg):"));

// Tính BMI
// let bmi = canNang / (chieuCao * chieuCao);
// let bmi = canNang / Math.pow(chieuCao, 2);
let bmi = canNang / chieuCao ** 2;
console.log("BMI của bạn là: " + bmi.toFixed(2));
// Xuất thông báo dựa trên kqua BMI
if (bmi < 15) {
  console.log("Thân hình quá gầy");
} else if (bmi >= 15 && bmi < 16) {
  console.log("Thân hình gầy");
} else if (bmi >= 16 && bmi < 18.5) {
  console.log("Thân hình hơi gầy");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Thân hình bình thường");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Thân hình hơi béo");
} else if (bmi >= 30 && bmi < 35) {
  console.log("Thân hình béo");
} else {
  console.log("Thân hình quá béo");
}
