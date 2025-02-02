//Ví dụ 1: Nhân đôi giá trị của các phần tử trong mảng
const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

//Ví dụ 2: Chuyển đổi mảng các đối tượng thành mảng các tên
const users = [
  {id: 1, name: "An", age: 25},
  {id: 2, name: "Bình", age: 30},
  {id: 3, name: "Châu", age: 28},
];

const names = users.map((abc) => abc.age);
console.log(names);

//ví dụ 3: sử dụng đầy đủ tham số currentValue, index và arr
const M = [10, 20, 30, 40];

const result = M.map(function (currentValue, index, oidoioi) {
  console.log(`index: ${index}`);
  console.log(`gia tri hien tai: ${currentValue}`);
  console.log(`mang goc: ${oidoioi}`);
  return currentValue / 10;
});

console.log(result);

//ví dụ 4: Đối số thisArg
const config = {
  calculate(value) {
    return value * 3;
  },
};

const M2 = [1, 2, 3];
// const kq = M2.map(function (oidoioi) {
//   return this.calculate(oidoioi);
// }, config);

const kq = M2.map((oidoioi) => {
  return this.calculate(oidoioi);
}, config);

console.log(kq);
