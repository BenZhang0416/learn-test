// 暴力解决
function isPowerOfFour(num) {
  num = parseInt(num);
  while (num > 1) {
    if (num % 4) {
      return false;
    }
    num /= 4;
  }
  return true;
}

// 版本 2
function isPowerOfFourVer2(num) {
  num = parseInt(num);
  return num > 0 && (num & (num - 1)) === 0 && (num & 0xAAAAAAAA === 0); 
}
console.log(isPowerOfFour(64));