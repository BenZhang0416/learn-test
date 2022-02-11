// 爬楼梯
// 1、动态规划，混动数组
const climbStairs1 = n => {
  let p = 0, q = 1, r = 1;
  if (n === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}
// 2、矩阵乘法
const climbStairs2 = n => {
  const q = [[1, 1], [1, 0]];
  const res = pow(q, n);
  return res[0][0];
}

// 矩阵幂乘
const pow = (a, n) => {
  let ret = [[1, 0], [0, 1]];
  while (n > 0) {
    if ((n & 1) === 1) {
      ret = multiply(ret, a);
    }
    n >> 1;
    a = multiply(a, a);
  }
  return ret;
}

// a, b 为2 * 2 矩阵
const multiply = (a, b) => {
  let c = new Array(2).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }
  return c;
}
console.log(climbStairs2(3));