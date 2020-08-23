// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// -----------------------------------------

// let sum = (a) => {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// };

// -----------------------------------------

let sum = (a) => (b) => (b ? sum(a + b) : a);

let getsum = sum(1)(2)(3)(4)(5)();

console.log(getsum);
