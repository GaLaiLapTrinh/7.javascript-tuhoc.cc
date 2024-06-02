//37.7 keyboard events and event object
const inp = document.querySelector("#inp");
inp.addEventListener("keydown", function () {
  console.log("KEYDOWN!");
});

inp.addEventListener("keyup", function () {
  console.log("KEYUP!");
});

//event object
// inp.addEventListener("keydown", function (e) {
//   console.log(e);
// });

inp.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

//Ví dụ, nếu người dùng bấm phím r
//thì thay đổi màu nền của trang web.
document.addEventListener("keydown", function (e) {
  if (e.code === "KeyR") {
    //đổi màu nền body
    document.body.style.backgroundColor = "cyan";
  }
});
