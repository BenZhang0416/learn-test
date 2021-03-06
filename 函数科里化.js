
// 函数科里化实现
// 函数科里化是指将使用多个参数的函数转换为一系列使用一个参数的函数的技术
function curry(fn, args) {
// 获取函数需要的参数的长度
let length = fn.length;

args = args || [];

return function() {
    let subArgs = args.slice(0);

    // 拼接得现有的所有参数
    for (let i = 0; i < )
}
}

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
// 第一次执行时，定义一个专门的数组来存储所有参数
var _args = Array.prototype.slice.call(arguments);

// 在内部声明一个函数，利用闭包的特性保存 _args 并收集所有的参数值
var _adder = function() {
    _args.push(...arguments);
    return _adder;
}

// 利用 toString 隐式转换的特性，当最后执行时进行隐式转换，并计算最终的值返回
_adder.toString = function() {
    return _args.reduce(function(a, b){
        return a + b
    })
}
return _adder;
}