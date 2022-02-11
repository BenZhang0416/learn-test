let str1 = "9007199254740991";
let str2 = "1234567899999999999";

// const bigIntAdd1 = (a, b) => {
//   const str1 = a.reverse();
//   const str2 = b.reverse();
//   const maxLen = Math.max(str1.length, str2.length);
//   for (let i = 0; i < maxLen; i++) {
    
//   }
// }


// 利用 padStart 函数补 0，从后向前进行运算
const binIntAdd2 = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let carry = 0;
  let sum = '';
  let tmp = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    tmp = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(tmp / 10);
    sum = tmp % 10 + sum;
  }
  if (carry === 1) {
    sum = '1' + sum;
  }
  return sum;
}

console.log(binIntAdd2(str1, str2));