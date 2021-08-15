// map 可以传入两个参数
Array.prototype.mapArr = function(fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw ('error in params')
    }

    let resArr = [];
    let inputArr = this;
    for (let i = 0; i < inputArr.length; i++) {
        resArr[i] = fn.call(thisArg, inputArr[i], i, inputArr)
    }
    return resArr;
}


String.prototype._repeat = function(n) {
    return new Array(n+1).join(this)
}
