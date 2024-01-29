//25.6 - Giai bai tap js 23 -giai pt b2 bang function
/*
Bài tập JS 23:  (PTB2 cách bình thường chữa ở bài 16.7 )
Sử dụng function Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c =0 
a.  a=1, b=2, c=-3
  Pt có 2 nghiệm  x1=1 x2 = -3
b.  a=1, b=2, c=1
  Pt có nghiệm kép x1=x2 = -1
c. case3 : a=1, b=1, c=1
=> Pt vô nghiệm
*/
//1. Cách 1: Function Declaration
function ptb2_1(a, b, c) {
  // Tính delta
  let delta = b ** 2 - 4 * a * c;
  // Kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1= x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
}

// Gọi hàm
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);

//Cách 2: Function Expression
let ptb2_2 = function (a, b, c) {
  // Tính delta
  let delta = b ** 2 - 4 * a * c;
  // Kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1= x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
};

// Gọi hàm
ptb2_2(1, 2, -3);
ptb2_2(1, 2, 1);
ptb2_2(1, 1, 1);

// Cách 3: Arrow Function
let ptb2_3 = (a, b, c) => {
  // Tính delta
  let delta = b ** 2 - 4 * a * c;
  // Kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1= x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
};

// Gọi hàm
ptb2_3(1, 2, -3);
ptb2_3(1, 2, 1);
ptb2_3(1, 1, 1);
