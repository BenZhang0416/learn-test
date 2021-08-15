// 去除字符串中出现次数最少的字符
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
console.log(romoveMinNumLetter(str1))

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