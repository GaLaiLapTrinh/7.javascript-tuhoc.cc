//37.11 - Event - Event Bubbling - stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener(
//   "click",
//   function () {
//     console.log("child clicked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent clicked");
//   },
//   true
// );

// grandparent.addEventListener(
//   "click",
//   function () {
//     console.log("grandparent clicked");
//   },
//   true
// );

//so sánh phương thức stopPropagation và stopImmediatePropagation
//1. dùng stopPropagation(); chỉ ngăn chặn sự kiện lan truyền từ con lên cha, không ngăn chặn sự kiện của cùng 1 element

// child.addEventListener(
//   "click",
//   function () {
//     console.log("child clicked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent clicked");
//   },
//   true
// );

// grandparent.addEventListener(
//   "click",
//   function () {
//     console.log("grandparent clicked");
//   },
//   true
// );

//so sánh phương thức stopPropagation và stopImmediatePropagation
//1. dùng stopPropagation(); chỉ ngăn chặn sự kiện lan truyền từ con lên cha,
//không ngăn chặn sự kiện của cùng 1 element

// child.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("child clicked");
// });

// child.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("child clicked 2");
// });

// parent.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("parent clicked");
// });

// grandparent.addEventListener("click", function (e) {
//   console.log("grandparent clicked");
// });

//2. dùng stopImmediatePropagation(); ngăn chặn sự kiện của cùng 1 element
child.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  console.log("child clicked");
});

child.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("child clicked 2");
});

parent.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("parent clicked");
});

grandparent.addEventListener("click", function (e) {
  console.log("grandparent clicked");
});
