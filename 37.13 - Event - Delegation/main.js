//37.13 - Event - Event delegation
//1. ngăn submit mặc định của form
//2.khi nhấn submit thì thêm 1 li vào ul

const form = document.querySelector("#form");
const list_item = document.getElementById("list_item");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //ngăn submit mặc định của form
  //lấy giá trị của ô username và message
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  //tạo thẻ li
  const newLi = document.createElement("li");
  newLi.textContent = username + ":" + message;
  //thêm vào ul
  list_item.append(newLi);
  //reset form
  form.reset();
});

//3. Xóa phần tử li khi click vào, không dùng event delegation
//chọn tất cả thẻ li
const lis = document.querySelectorAll("li");
console.log(lis);
//duyệt qua danh sách li
// for (let li of lis) {
//   //lắng nghe sự kiện click vào thẻ li
//   li.addEventListener("click", function () {
//     //xoá thẻ li
//     li.remove();
//   });
// }

// Vấn đề: khi thêm 1 li mới vào ul,
//thì li đó không có sự kiện click
//Xóa phần tử li khi click vào dùng event delegation

list_item.addEventListener("click", function (e) {
  const li = e.target;
  //li.remove();
  //kiểm tra xem thẻ được click có phải li không
  if (li.tagName === "LI") {
    li.remove();
  }
});
