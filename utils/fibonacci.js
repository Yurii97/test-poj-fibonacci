// const mul = ([[a1, a2], [a3, a4]], [[b1, b2], [b3, b4]]) => [
//   [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
//   [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4],
// ];

// const matrix = [
//   [0, 1],
//   [1, 1],
// ];
// const id = [
//   [1, 0],
//   [0, 1],
// ];

// const fibonacci = (n) => {
//   let result = id;
//   const bits = n.toString(2);
//   console.log(bits);

//   for (const bit of bits) {
//     result = mul(result, result);
//     if (bit == "1") {
//       result = mul(result, matrix);
//     }
//   }
//   return result[1][0];
// };

function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = fibonacci;
