
// 1 -> ['a', 'b', 'c'];
// 2 -> ['d', 'e',];
// 3 -> ['f','g', 'h']
// 给出由 1，2，3组成的数字，返回所有可能的字符串数组

// const map = {
//     1: ['a', 'b', 'c'],
//     2: ['d', 'e'],
//     3: ['f','g', 'h']
// }

// function letterCombiantions(num) {
//     let res = new Array(n).fill(0).map(() => new Array(3).fill(0))
//     if(!num) {
//         return [];
//     }
//     let nums = num.split("");
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < map[i].length; j++) {

//         }
//     }
// }


// 全排列
// 给定一个 没有重复 数字的序列，返回所有可能的全排列

// 示例 输入[1, 2, 3]
// 输出：[
//     [1, 2, 3],
//      
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 深度优先搜索 + 状态变量
// 树形状态上的深度优先遍历就是回溯算法，状态重置就是回溯算法中回溯的意思

var permute = function(nums) {
    ans = [];
    res = [];
    used = [];
    const dfs = function(num, nums) {
        len = nums.length;
        if(num === len) {
            let tmp = res.map(function(item) {
                return item;
            });
    
            ans.push(tmp);
            return;
        }
    
        for(let i = 0; i < len; i++) {
            if(used[i]) continue;
            used[i] = true;
            res.push(nums[i]);
            dfs(num + 1, nums);
    
            // 回溯改变改变状态变量 
            used[i] = false;
            res.pop();
        }
    }

    dfs(0, nums);
    return ans;
}

let a = permute([1, 2, 3])
console.log(a)

// 给定一个可【包含重复数字】的序列 nums ，按任意顺序 返回所有不重复的全排列
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]



