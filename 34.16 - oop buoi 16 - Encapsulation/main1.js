//34.16 - oop buoi 16 Encapsulation
/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/

class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this.balance = 0; //Tài khoản bằng 0 lúc tạo thẻ
  }

  //Phương thức gửi tiền vào tài khoản
  deposit(value) {
    this.balance += value;
  }

  //Rút tiền
  withdraw(value) {
    if (value > this.balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this.balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// Tạo đối tượng
const wallet = new Wallet("MB bank", "1234");

console.log(wallet.balance);
// Gửi tiền
wallet.deposit(1000);
//Rút tiền
wallet.withdraw(250);
// Xem tài khoản, pin
console.log(wallet.balance);
console.log(wallet.pin);

//Bài toán là chúng ta không muốn cho phép truy cập
//trực tiếp để kiểm tra số dư và mã pin
