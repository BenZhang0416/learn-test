const isPalindromeStr = str => {
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  } 
  return true
}

const deleteTimes = str => {
  const n = str.length
  let ans = 0
  if (isPalindromeStr(str)) {
    return ans += 1
  }
  ans = Math.min(deleteTimes(str.substring(0, n - 2)), deleteTimes(str.substring(1, n - 1))) + 1;
  return ans
}

console.log(deleteTimes('babab'))
