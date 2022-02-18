
let arr = [1, [1,2], [[1,2]]]
ans = []

// function flatten(arr) {
//     if(!arr.length) return arr;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flatten(arr[i])
//         } else {
//             ans.push(arr[i])             
//         }
//     }
//     return ans;
// }

function flattern(arr) {
    ans = [];
    if (!arr) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattern[arr[i]];
        } else {
            ans.push(arr[i])
        }
    }
    return ans
}

console.log(flatten(arr))

// 对象数组去重
var songs = [ { name: "羽根", artist: "air" }, { name: "羽根", artist: "air" },
{ name: "晴天2", artist: "周杰伦" }, { name: "晴天", artist: "周杰伦" },
{ artist: "周杰伦1", name: "晴天" }]

let newObj = [];

songs.reduce((pre, cur) => {
    newObj[cur.name] ? '' : newObj[cur.name] = pre.push(cur);
    return pre;
}, [])

console.log(songs)

//对象数组去重原生js方法

arr = [1, 2, 3, 4, 5];

sum = arr.reduce((pre, cur) => {return pre + cur; }, 5)
console.log(sum )

// 手写reduce
arr1 = [1,2,3,4,5];

Array.prototype.reduceArr = function (fn, inintValue) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('传入的参数不是函数');
    }

    let arr = this;
    let initIndex;
    let acc; //acc : 累加器
    initIndex = arguments.length === 1 ? 1 : 0;
    acc = arguments.length === 1 ? arr[0] : inintValue;
    for (let i = initIndex; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
}

sum1 = arr1.reduceArr((pre, cur) => {return pre + cur; }, 0)
console.log(sum1)

// 取字符串某几位
let str = 'abcdefg';
str1 = str.substring(str.length - 3, str.length);
console.log(str1)