//37.10 Input & Change Events
//change event: sự kiện xảy ra khi giá trị thay đổi và mất focus
const inputFrm = document.querySelector("#name");
// inputFrm.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

//input event: Đây là một sự kiện mà trình duyệt
// kích hoạt khi người dùng thực hiện bất
//kỳ hành động nhập liệu nào trên một phần tử HTML
inputFrm.addEventListener("input", function (e) {
  console.log(e.target.value);
  //đưa giá trị của input vào thẻ h2 có id là hi
  const hi = document.querySelector("#hi");
  hi.textContent = e.target.value;
});
