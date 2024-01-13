//15. Hàm `Math.random()`
//1. Random trong [0-> 1)
let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue}`);

// 2. Random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2}`);

// 3.Random số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue3}`);

// chạy từ 0 đến sát 30
let randomValue4 = parseInt(Math.random() * 21) +10;
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue4}`);
