//34.5. Một số phương thức sẵn có Trong JavaScript,
// 1. Object.keys(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng.
let person = {
  name: "John",
  age: 30,
};
let keys = Object.keys(person);
console.log(keys);

//2. Object.values(obj);
// Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng.
let person2 = {
  name: "John",
  age: 30,
};

let values = Object.values(person2);
console.log(values);

//3. Object.entries(obj);
// Phương thức này trả về một mảng chứa các cặp [khóa, giá trị] của đối tượng dưới dạng mảng con.
let person3 = {
  name: "John",
  age: 30,
};

let entries = Object.entries(person3);
console.log(entries);

// 4. Object.assign(target, source);
//sử dụng để sao chép các thuộc tính từ một hoặc
//nhiều đối tượng nguồn (source) vào một đối tượng đích (target).
let target = {c: 100};
let source1 = {a: 1};
let source2 = {b: 2};
Object.assign(target, source1, source2);
console.log(target);

let target2 = {...source1, ...source2};
console.log(target2);
