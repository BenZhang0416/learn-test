// 返回最长的子序列字符串
const longestCommonSubsequence = (text1, text2) => {
  // 找出最长公共子序列长度
  const m = text1.length, n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
      const char1 = text1[i - 1];
      for (let j = 1; j <= n; j++) {
          const char2 = text2[j - 1];
          if (char1 === char2) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }

  // 找出一个最长的公共子序列
  var res = '';
  let i = text1.length, j = text2.length; 
  while (i !== 0 && j !== 0) {
    if (text1[i - 1] === text2[i - 1]) {
      res = text1[i - 1] + res;
      i--;
      j--;
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  if (res.length === 0) {
    return -1;
  }
  return res;
}

const str1 = '1A2C3D4B56';
const str2 = 'B1D23A456A';

console.log(longestCommonSubsequence(str1, str2));