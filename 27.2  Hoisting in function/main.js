//27.2 - Hoisting in function
/*
1. Hoisting:
Function Declaration: Có hoisting. Bạn có thể gọi hàm trước khi nó được định nghĩa.
*/
hoistedFunction();
function hoistedFunction() {
  console.log("Hello");
}
//Engine của trình duyệt đọc :
function hoistedFunction() {
  console.log("Hello");
}
hoistedFunction();

/*
Function Expression: Không có hoisting. Phải gọi hàm sau khi đã đã định nghĩa 
*/
// nonHoistedFunction(); // Lỗi
let nonHoistedFunction = function () {
  console.log("Hello");
};

/*
Arrow Function: Không có hoisting. Phải gọi hàm sau khi đã đã định nghĩa 
*/
arrowFunction(); // Lỗi
let arrowFunction = () => {
  console.log("Hello");
};
