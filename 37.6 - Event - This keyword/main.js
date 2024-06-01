//37.6 - This keyword
//Hàm thay đổi ngẫu nhiên giá trị màu r,g,b
function randomColor() {
  const r = Math.floor(Math.random() * 256); //0-255
  const g = Math.floor(Math.random() * 256); //0-255
  const b = Math.floor(Math.random() * 256); //0-255
  return `rgb(${r},${g},${b})`;
}
//Chọn phần tử button
const btnList = document.querySelectorAll(".btn");
//Mỗi lần click thay đổi màu nền và màu chữ của button
// for (let btn of btnList) {
//   if (btn instanceof HTMLElement) {
//     btn.addEventListener("click", function () {
//       btn.style.backgroundColor = randomColor();
//       btn.style.color = randomColor();
//     });
//   }
// }

//Chọn phần tử có class là title
const titles = document.querySelectorAll(".title");
//Mỗi lần click thay đổi màu nền và màu chữ của title
// for (let title of titles) {
//   if (title instanceof HTMLElement) {
//     title.addEventListener("click", function () {
//       title.style.backgroundColor = randomColor();
//       title.style.color = randomColor();
//     });
//   }
// }
//Dễ nhân thấy rằng, chúng ta đã viết 2 đoạn code tương tự nhau
//để thay đổi màu nền và màu chữ của button và title.
//Để giảm sự lặp lại, chúng ta sẽ viết 1 hàm, sử dụng từ khóa this
//để tham chiếu đến phần tử đang được click.
function changeColor() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
//Code phía trên viết gọn lại như sau
//Mỗi lần click thay đổi màu nền và màu chữ của button
for (let btn of btnList) {
  btn.addEventListener("click", changeColor);
}
//Mỗi lần click thay đổi màu nền và màu chữ của title
for (let title of titles) {
  title.addEventListener("click", changeColor);
}
