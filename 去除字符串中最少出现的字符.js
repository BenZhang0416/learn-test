// 这是我滴滴网约车部门三面时 面试官出的一道面试题，思路不难，但我但是值写出了伪代码
// 也就是说写的代码跑不出来，复盘时我发现当时出现的几个问题
// 1、基础不牢，字符串替换函数 repalce 不了解，导致我一度想将字符串转换为数组来做
// 2、我在确定 出现次数最少的字符时，思维混乱，当时的想法是用哈希计数，找到出现最少的字符，
// 但是我一直纠结如果两个字符出现的次数都是最少该怎么办，解决的方法本质上进行匹配就可以，但当时就是想不出来
// 3、对 Map 数据结构的操作不熟，当时我想创建一个 Map 而非对象来进行计数，但是我对 Map 相关操作不熟。

// 去除字符串中出现次数最少的字符
// str = 'abababc'  -> 'ababab';
// str1 = 'abcabca' -> 'aaa';
str = 'abababc' 
str1 = 'abcabca'

// 用对象来做
function romoveMinNumLetter(str) {
    const map = {};
    // for(let v of str) map[v] = (map[v] || 0) + 1;
    for(let v of str) {
        if(map[v]) {
            map[v]++;
        } else {
            map[v] = 1;
        }
    }
    let count = Object.values(map);
    count.sort((a, b) => a - b);
    let min = count[0];
    for(let v of str) {
        // 这里本质上是匹配
        if(map[v] === min) {
            // console.log(map[v])
            str = str.replace(v, "")
        }
    }
    return str;
}
console.log(romoveMinNumLetter(str))

// 用 Map 来做
function romoveMinNumLetter1(str) {
    const map1 = new Map();
    for(let v of str) map1[v] = (map1[v] || 0) + 1;
    let count = Object.values(map1);
    count.sort((a, b) => a - b);
    let min1 = count[0];
    for(let v of str) {
        if (map1[v] === min1) {
            str = str.replace(v, "");
        }
    }
    return str;
}

function rm(str) {
    let map = {};
    for(let v of str) {
        if(map[v]) {
            map[v]++;
        } else {
            map[v] = 1;
        }
    }

    let count = Object.values(map);
    count.sort((a,b) => a - b)
    const min = count[0];
    for(let v of str) {
        if(map[v] === min) {
            str.replace(v, "");
        }
    }
    return str;
}