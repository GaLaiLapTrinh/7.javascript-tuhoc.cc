//36.6 - Dom - removeAttribute and hasAttribute
// document.querySelector("#heading_title").setAttribute("style", "color: blue;");

// Sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");

//10. hasAttribute
// Kiểm tra xem phần tử có thuộc tính class không ?
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

// 11.removeAttribute
// Loại bỏ 1 thuộc tính khỏi phần tử
item2.removeAttribute("style");

// Kiểm tra lại xem thuộc tính style đã bị loại bỏ hay chưa?
console.log(item2.hasAttribute("style"));

//Bài tập: Xóa toàn bộ thuộc tính href trong các thẻ a nằm trong ul
// Chọn tất cả các thẻ a trong phần tử ul
const anchorTags = document.querySelectorAll("ul a");

// Lặp qua từng thẻ a và xóa thuộc tính href
anchorTags.forEach((anchor) => {
  anchor.removeAttribute("href");
});
