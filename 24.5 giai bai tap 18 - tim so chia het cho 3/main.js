//24.5 giai bai tap 18 - tìm số chia hết cho
/*
Bài tập JS 18:  
       Viết chương trình :
Tìm những số chia hết cho 3 từ 10 đến 50
*/

for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Nâng cao, đếm có bao nhiêu giá trị
let count = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log(`Có ${count} số chia hết cho 3 từ 10-50`);
