// Ví dụ 1: Các hàm thực hiện bất đồng bộ. Hàm 2 sẽ không đợi hàm 1 thực thi xong

// function first() {
//     setTimeout(() => {
//         console.log('first');
//     }, 500);
// }
// function second() {
//     console.log('second');
// }
// first();
// second();

// ------------------------------
// Ví dụ 2: callback
function first(second) {
    setTimeout(() => {
        console.log('first');
        second('second');
    }, 500);
}

first(function(res) {
    console.log(res);
});