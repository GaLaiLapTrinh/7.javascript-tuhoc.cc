//37.4 - Event - addEventListener
//cú pháp: element.addEventListener(event, function, options)
//element: phần tử muốn thêm sự kiện
//event: tên sự kiện
//function: hàm xử lý sự kiện
//options: object, chứa các thuộc tính của sự kiện

//1. Lấy phần tử
const btn = document.getElementById("btn3");
//2. Thêm sự kiện
//2.1 Sử dụng với function expression
// btn.addEventListener("click", function () {
//   alert("Bạn đã click vào button");
// });
//2.2 sử dụng với function declaration
// function handleClick() {
//   alert("Bạn đã click vào button");
// }
// btn.addEventListener("click", handleClick);
//2.3 Sử dụng với arrow function
btn.addEventListener("click", () => {
  alert("Bạn đã click vào button");
});

//3. Lợi ích của addEventListener
//3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử
//lấy phần tử
const btn4 = document.getElementById("btn4");
//Hàm xử lý sự kiện 1
function handleClick1() {
  alert("Đây là sự kiện 1");
}

//Hàm xử lý sự kiện 2
function handleClick2() {
  alert("Đây là sự kiện 2");
}
//Thêm sự kiện
// btn4.addEventListener("click", handleClick1);
// btn4.addEventListener("click", handleClick2);
// Thử với cách cũ DOM Level 0 Event Handling
// không thể thêm cùng 1 sự kiện cho 1 phần tử
// btn4.onclick = handleClick1;
// btn4.onclick = handleClick2;
//Về cơ bản sự kiện 1 sẽ bị ghi đè bởi sự kiện 2

//3.2 Có thể xóa sự kiện
// btn4.removeEventListener("click", handleClick1);
//3.3 Có thể sử dụng sự kiện với options
btn4.addEventListener("click", handleClick1, {once: true});
btn4.addEventListener("click", handleClick2);
