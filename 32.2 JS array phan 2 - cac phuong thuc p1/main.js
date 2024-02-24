//32.2 Các phương thức làm việc với mảng phần 1
/*
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
*/

//1. concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr);
console.log(arr1);
console.log(arr2);

//2. push(): Thêm một hoặc nhiều phần tử vào cuối mảng gốc.
let arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);

//3. unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng gốc.
let arr4 = [1, 2];
arr4.unshift(0, 1, "nam");
console.log(arr4);

//4. pop(): Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loại bỏ.
let arr5 = [1, 2, 3, "nam"];
let removedElement = arr5.pop();
console.log(arr5);
console.log(removedElement);

//5. shift(): Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ.
let arr6 = [1, 2, 3];
let removedElement2 = arr6.shift();
console.log(arr6);
console.log(removedElement2);

//6.slice(start, end): Tạo một bản sao của mảng cắt từ start đến end-1
//từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc).
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4);
console.log(arr7);
console.log(sliceArr);

//7. includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
//Trả về true nếu có và false nếu không.
let arr8 = [1, 2, 3, 4, 5, "nam"];
let isPresent = arr8.includes("hung");
console.log(isPresent);
