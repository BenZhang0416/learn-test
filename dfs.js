const grid = [
  ['a','h','k','o'],
  ['a','h','r','o'],
  ['b','l','a','p'],
  ['k','p','l','a']
];

const target = 'lark';

function getSum(grid, target) {
  const m = grid.length, n = grid[0].length;
  let ans = 0;
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          const val = grid[i][j];
          if (val === target[0]) {
              ans += dfs(grid, i, j, 1);
          }
      }
  }
  return ans;
}

function dfs(grid, i, j, target, index) {
  const m = grid.length, n = grid[0].length;
  let ans = 0;
  if (target[index] !== target[target.length - 1]) {
    return 0;
  }
  if (target[index] === target[target.length]) {
      return 1;
  }
  if (i < m) {
      ans += dfs(grid, i+1, j, index + 1, target);
  } 
  if (j < n) {
      ans += dfs(grid, i, j + 1, index + 1, target);
  }
  if (i > 0) {
      ans += dfs(grid, i - 1, j, index + 1, target);
  }
  if (j > 0) {
      ans += dfs(grid, i, j - 1, index + 1, target);
  }
  return ans;
}

console.log(getSum(grid, target));
