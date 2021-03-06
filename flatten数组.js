// 递归 
let arr = [1, [2, [3,4]]] //初始数组
let res = [];
function flattern1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattern1(arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flattern1(arr));

//  toString 方法
// 对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。
// 通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number。
function flattern2(arr) {
    return arr.toString().split(',').map(function(item) {
        return +item // + 可以快速得到 Number 类型
    })
}
console.log(flattern2(arr));

function f2(arr) {
    return arr.toString().split("").map((item) => {
        return item;
    })
}

//  reduce方法 
function flattern3(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flattern3(next) : next);
    },[])
}
console.log(flattern3(arr));

//  ES6 拓展运算符 ... 
function flattern4(arr) {
    // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flattern4(arr))
