//32.4 Các phương thức làm việc với mảng phần 3 - Phương thức splice()
/*
A. Các phương thức phần 1 (bài 32.2)
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
B. Các phương thức phần 2 (Bài 32.3)
8   indexOf()
9   lastIndexOf()
10  reverse()
11  join(separator)
C. Các phương thức phần 3 (Bài 32.4)
12 splice()
*/

// 12.  splice():  array.splice(start, deleteCount, item1, item2, ...);

/*
start: Chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. Nếu deleteCount là 0, không có phần tử nào bị loại bỏ.
item1, item2, ...: Các phần tử mới sẽ được thêm vào mảng từ vị trí start
*/
// 12.1 Loại bỏ phần tử từ mảng:
let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(2, 2); //xóa từ vị trí index 2 , xóa đi 2 phần tử
arr11.splice(-2, 2); //xóa từ vị trí index -2 , xóa đi 2 phần tử
console.log(arr11);

let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); //xóa từ vị trí index 2, xóa đi 1 ký tự
//Thêm phần tử 6 từ vị trí index 2
console.log(arr12);

//12.3 Thêm phần tử vào mảng:
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8, 9);
// Xóa 0 phần tử
// Thêm 6, 7, 8, 9 vào mảng từ vị trí index 2
console.log(arr13);
