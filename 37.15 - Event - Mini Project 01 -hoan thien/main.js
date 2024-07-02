//chọn tất cả các phần tử có class panel
const panels = document.querySelectorAll(".panel");
//xuất thử biến panel để xem
console.log(panels);
//duyệt từng phần tử trong danh sách panels
panels.forEach((item) => {
  //xuất ra giá trị item để xem
  console.log(item);
  //lắng nghe sự kiện click
  item.addEventListener("click", () => {
    //xoá class active của các panel khác
    removeActive();
    //thêm class active cho panel được clik
    item.classList.add("active");
  });
});

function removeActive() {
  //duyệt từng phần tử trong danh sách panels
  panels.forEach((item) => {
    //xoá class active
    item.classList.remove("active");
  });
}
