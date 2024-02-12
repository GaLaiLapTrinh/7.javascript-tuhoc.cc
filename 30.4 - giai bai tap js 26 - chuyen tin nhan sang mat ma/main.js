//30.4 - giai bai tap js 26 - chuyen tin nhan sang mat ma
/*
 Bài tập js 26:
Viết chương trình chuyển tin nhắn sang mật mã theo bảng : 	
const a="abcdefghijklmnopqrstuvwxyz"   
const b="zxcvbnmasdfghjklqwertyuiop" 
 */

function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // Chuyển đổi thành chữ thường để phù hợp với bảng mã

    // Kiểm tra xem ký tự nhập vào có trong bảng mã hay không
    if (a.includes(char)) {
      // Thực hiện chuyển đổi
      // Kiểm tra vị trí index ký tự nhập vào trong a
      let index = a.indexOf(char);
      // Lấy giá trị index, dóng sang chuỗi b để lấy ký tự tương ứng trên b
      result += b[index];
    }
    // Nếu không có trong bảng mã, thì giữ nguyên ký tự và dồn vào biến result
    else {
      result += char; //result = result +char
    }
  }

  return result;
}

// Cho người dùng nhập liệu
let messageInput = prompt("Nhập tin nhắn cần mã hoá:");
let kq = encryptMessage(messageInput);

alert(`Tin nhắn được mã hoá: ${kq}`);
