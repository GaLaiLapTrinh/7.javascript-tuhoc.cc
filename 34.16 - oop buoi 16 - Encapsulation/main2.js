//34.16 - oop buoi 16 Encapsulation
/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/


// Thêm dấu gạch dưới: Private fields : Trường riêng tư theo quy ước,
// và nó vẫn có thể truy cập trực tiếp từ bên ngoài
class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this._pin = pin;
    this._balance = 0; //Tài khoản bằng 0 lúc tạo thẻ
  }

  //Phương thức gửi tiền vào tài khoản
  deposit(value) {
    this._balance += value;
  }

  //Rút tiền
  withdraw(value) {
    if (value > this._balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this._balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// Tạo đối tượng
const wallet = new Wallet("MB bank", "1234");

console.log(wallet._balance);
// Gửi tiền
wallet.deposit(1000);
//Rút tiền
wallet.withdraw(250);
// Xem tài khoản, pin
console.log(wallet._balance);
console.log(wallet._pin);

//Bài toán là chúng ta không muốn cho phép truy cập
//trực tiếp để kiểm tra số dư và mã pin
