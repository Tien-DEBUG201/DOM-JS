// function sayhello() {
//   alert("Hello from external JS!");
// }

// In bang cuu chuong cua 6
// let a = 6;
// for(let i=1; i<=10; i++ ){
//     console.log("6*",i, "=", 6*i);
// }

// Dung while tinh tong tu 1 den 100
// let b = 0;
// let sum = 0;
// while(b<=100){
//     sum = sum +b;
//     b++;
// }
// console.log(sum);

// dung do while yeu cau nhap dung mk 123456 moi cho thoat vong lap
// let password = "123456";
// let input = "abc";

// do {
//   console.log("Chưa đúng mật khẩu");
//   input = "123456";
// } while (input !== password){
//     console.log("Đăng nhập thành công!");
// }


// let Hello = function(){
//     console.log("Xin chao hoc vien");
// }

// console.log(Hello(), Hello());

// // Arrow funciton

// const nhandoi = (x,y) => {
//     return x*y;
// }
// const kiemTraChanLe = n =>{
//     if(n%2===0){
//         console.log("Chẵn");
//     } else{
//         console.log("Lẻ");
//     }
// }

// console.log(nhandoi(5,3));         // Output: 10
// console.log(kiemTraChanLe(5));   // Output: "Lẻ"
// console.log(kiemTraChanLe(8));   // Output: "Chẵn"

//  Bai 1: Tao 1 Promise cơ ban

// let isFail = false;
// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         if(isFail){
//             reject("Tải thất bại!");
//         } else {
//             resolve("Tải thành công!");
//         }
//     }, 2000);
// })

// Bai 2: Dung .then() va .catch()

// myPromise
// .then((result)=>{
//     console.log("Thành công", result);
// })
// .catch((error)=>{
//     console.log("Thất bại", error);
// })

// Bai 3: Dung async / await

// async function taiTL() {
//     console.log("Đang tải tài liệu");
//     try {
//         const kq = await myPromise;
//         console.log("Tải thành công", kq);
//     } catch (error) {
//         console.log("Tải thất bại", error);
//     }
// }


// Home work: viet ham checkNumber nhan vao 1 so nguyen va tra ve 1 promise
function checkNumber(num){
    return new Promise((resolve, reject)=>{
        if(num%2===0){
            resolve("Số" + num + "Là số chẵn!");
        } else {
            reject("Lỗi" + num + "Là số lẻ!");
        }
    })
}
// Tạo 1 hàm để bắt sự kiện onclick 
function check(){
    let num = 10;
    checkNumber(num)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
    .finally(()=>{
        console.log("Kết thúc kiểm tra");
    });

}





// let a = 10;
// let b = 3;

// Tính tổng hiệu tích thương
// console.log("a+b =",a+b);
// console.log("a+b =",a-b);
// console.log("a+b =",a*b);
// console.log("a+b =",a/b);

// So sánh toán tử a và b bằng toán tử ==, ===, !=, !==, <, >, <=, >=.
// console.log("a == b:", a == b);      // false
// console.log("a === b:", a === b);    // false
// console.log("a != b:", a != b);      // true
// console.log("a !== b:", a !== b);    // true
// console.log("a < b:", a < b);        // false
// console.log("a > b:", a > b);        // true
// console.log("a <= b:", a <= b);      // false
// console.log("a >= b:", a >= b);      // true



// Test
// if(a===b){
//     console.log("a=b", a===b);
// } else if (a>b){
//     console.log("a>b", a>b);
// } else{
//     console.log("a<b", a<b);
// }





//1. Tính tổng, hiệu, tích, chia của 2 số // 11
// let a = 8;
// let b = 3;
// console.log("Tổng:", a + b);

// //2. So sánh 2 số: ai lớn hơn? // true
// if (a > b) {
//   console.log("a lớn hơn b");
// }

// //3. Kiểm tra điều kiện vào rạp: // false
// let age = 17;
// let hasTicket = true;
// if (age >= 18 && hasTicket) {
//   console.log("Cho phép vào rạp");
// } else {
//   console.log("Không được vào");
// }

// console.log()
// debugger
