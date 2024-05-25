//36.11 :Truy cập Parent, Child, and Siblings
//Truy cập vào các phần tử cha, con, anh em
//Parent: cha 🐱‍🚀
//Child: con 👶
//Sibling: anh em ruột 🧍‍♀️🧍‍♂️
//ví dụ:
let elm = document.querySelector(".hero__content");
//1. Truy cập vào phần tử cha (phần tử cha thì là duy nhất)
console.log(elm.parentElement);
//đổi màu nền của thẻ cha
elm.parentElement.style.backgroundColor = "red";

//2. Truy cập vào phần tử con (phần tử con có thể có nhiều)
console.log(elm.children);
//HTMLCollection(3) [h1.hero__heading, p.hero__desc, div.hero__row]
console.log(elm.children[0]);
console.log(elm.children[1]);
console.log(elm.children[2]);
console.log(elm.children[3]);

//3. nextElementSibling: chọn phần tử anh em kế tiếp
console.log(elm.children[1].nextElementSibling);

//4. previousElementSibling: chọn phần tử anh em trước đó
console.log(elm.children[1].previousElementSibling);
