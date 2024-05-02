//36.2 - Dom - innerHTML and getElement- ById - ByTagName - ByClassName -
//3.getElementsByTagName
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item); //trả về mảng các phần tử li
//Chúng ta có thể kiểm tra xem mảng có ? phần tử
console.log(li_item.length);
//truy xuất và thay đổi 1 phần tử theo vị trí index
li_item[1].innerHTML = "Phần tử li index 1 đã thay đổi";

//4.getElementsByClassName
console.log("getElementsByClassName: ");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

li_class_item[1].innerHTML = "Phần tử li index 1 đã thay đổi lần 2";

//5. getElementById
let el = document.getElementById("list_about");
console.log(el);
//thay đổi text trên biến el
el.innerHTML = "Something about me";
