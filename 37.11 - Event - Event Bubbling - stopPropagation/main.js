//37.11 - Event - Event Bubbling - stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//   console.log("child clicked");
// });

// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// });

// grandparent.addEventListener("click", function () {
//   console.log("grandparent clicked");
// });
//Tuy chúng ta chỉ click vào thẻ con,
//nhưng do các thẻ cha của nó cũng có sự kiện click nên khi click vào thẻ con thì sẽ lan ra các thẻ cha của nó
//Đây được gọi là Event Bubbling

//Để ngăn event bubbling, chúng ta sử dụng phương thức stopPropagation()
child.addEventListener("click", function (e) {
  e.stopPropagation(); //ngăn chặn sự kiện lan ra các thẻ cha
  console.log("child clicked");
});

parent.addEventListener("click", function (e) {
  e.stopPropagation(); //ngăn chặn sự kiện lan ra các thẻ cha
  console.log("parent clicked");
});

grandparent.addEventListener("click", function () {
  console.log("grandparent clicked");
});
