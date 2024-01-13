//19.2 giải bài tập 14 switch case js
/*/
Bài tập 14:  Áp dụng switch case 
Viết chương trình khung tìm kiếm: cho người dùng nhập vào lựa chọn 
1. tìm theo tên
2. tìm theo tác giả
3. tìm theo nhà xuất bản
4. tìm theo tiêu đề
Thoát nếu phím bấm không hợp lệ
*/

let choice = Number(
  prompt(`
Chọn cách tìm kiếm:
1. tìm theo tên
2. tìm theo tác giả
3. tìm theo nhà xuất bản
4. tìm theo tiêu đề
`)
);

switch (choice) {
  case 1:
    alert("Bạn đã chọn tìm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm theo tác giả");
    break;
  case 3:
    alert("Bạn đã chọn tìm theo nhà xuất bản");
    break;
  case 4:
    alert("Bạn đã chọn tìm theo tiêu đề");
    break;
  default:
    alert("Lựa chọn không hợp lệ");
    break;
}
