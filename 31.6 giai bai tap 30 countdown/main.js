//Bài tập: js 30 viết chương trình đếm ngược thời gian theo từng giây(countdown)
//Ví dụ thời gian làm bài là 45 phút, nếu chạy về 0 thì thông báo hết thời gian
function countdown(minutes) {
  alert("Thời gian làm bài của bạn là: " + minutes + "phút");
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    // Thân hàm
    let minutesLeft = Math.floor(seconds / 60); // 65/60 ~ 1.083 -->  1
    let secondsLeft = seconds % 60; //65%60 = 5
    // Format second : hiện số giây theo định dạng 01 02 03...
    let prefixSecondFormat = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}:${prefixSecondFormat}${secondsLeft}`);

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian");
    } else {
      seconds--;
    }
  }, 1000);
}

let timeInput = Number(prompt("Mời nhập vào thời gian làm bài"));
// Gọi hàm
countdown(timeInput);
