/**
题目1
实现一个随机符串生成函数 randomStr()，要求如下：
1. 生成的随机的字符串应该以字母开头，并包含 [a-z][0-9] 这些字符。
2. 生成的字符串长度为 8。
3. 生成的字符串不能够在程序运行的生命周期中存在重复的情形。
输入输出样例
输入：randomStr()
输出：'g9cnbi3q'
*/

const strGenerator = n => {
  let randomNum = Math.random()*25 + 97;
  let res = String.fromCharCode(randomNum);
  let cnt = 0;
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  while (cnt < n) {
    const ranMidNum = Math.random() * 36;
    res = res + String.fromCharCode(ranMidNum);
    cnt++;
  }
  return res;
}

const randomStr = n => {
  return strGenerator(n);
}


// console.log(strGenerator(8));
console.log(randomStr(3));