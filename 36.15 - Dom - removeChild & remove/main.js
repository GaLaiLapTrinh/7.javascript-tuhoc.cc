// 36.15 - Dom - removeChild & remove
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa
let childElm = document.querySelector("#item2");
//chọn phần tử cha của phần tử cần xóa
let ul = document.querySelector("#list");
// Xóa phần tử removeChild
ul.removeChild(childElm);

//hoặc cách 2 ngắn gọn hơn, dùng kiến thức đã học để không cần chọn phần tử cha
//lấy phần tử cần xóa
let childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

//✔ 2. remove
//cú pháp: element.remove()
//chọn phần tử cần xóa
let childElm3 = document.querySelector("#item4");
//Xóa phần tử
childElm3.remove();
