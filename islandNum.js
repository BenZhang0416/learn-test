/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let ans = 0;
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const val= grid[i][j]
            if (val === '1') {
                ans += dfs(grid, i, j);
            }
        }
    }
    return ans;
};

const dfs = (grid, i, j) => {
    const m = grid.length, n = grid[0].length;
    if (i === 0) {
        if (j === 0) {
            return grid[i+1][j] === "0" || grid[i][j+1] === "0" ? 1 : 0;
        }
        return Number(grid[i][j+1]) + Number(grid[i+1][j]) + Number(grid[i][j-1]) < 2 ? 1 :0;
    }
    if (i === m) {
        if (j === n) {
            return grid[i][j - 1] === '0' || grid[i-1][j] === '0' ? 1 : 0; 
        }
        return Number(grid[i][j - 1]) + Number(grid[i][j+1]) + Number(grid[i-1][j]) < 2 ? 1 : 0;
    }
    if (j === n) {

    }
    if (j === 0) {
        if ()
    }
    return Number(grid[i][j-1]) + Number(grid[i][j+1]) + Number(grid[i-1][j]) + Number(grid[i+1][j]) < 2 ? 1 : 0;
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid2));
