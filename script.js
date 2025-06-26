function sayhello() {
  alert("Hello from external JS!");
}

let a = 10;
let b = 3;

// Tính tổng hiệu tích thương
console.log("a+b =",a+b);
console.log("a+b =",a-b);
console.log("a+b =",a*b);
console.log("a+b =",a/b);

// So sánh toán tử a và b bằng toán tử ==, ===, !=, !==, <, >, <=, >=.
console.log("a == b:", a == b);      // false
console.log("a === b:", a === b);    // false
console.log("a != b:", a != b);      // true
console.log("a !== b:", a !== b);    // true
console.log("a < b:", a < b);        // false
console.log("a > b:", a > b);        // true
console.log("a <= b:", a <= b);      // false
console.log("a >= b:", a >= b);      // true

debugger

// Test
if(a===b){
    console.log("a=b", a===b);
} else if (a>b){
    console.log("a>b", a>b);
} else{
    console.log("a<b", a<b);
}





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
