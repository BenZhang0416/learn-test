
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

// 利用 ES6 set 去重
function unique1(arr) {
    return Array.from(new Set(arr))
}

// for 循环 + splice 函数
function unique2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// 利用 indexOf 去重
function unique3(arr) {
    if (!Array.isArray(arr)) {
        throw ('error in params')
    }
    var resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (resArr.indexOf(arr[i]) === -1) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// 数组排序
function unique4(arr) {
    if (!Array.isArray(arr)) {
        throw ('error in params')
    }

    arr = arr.sort();
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// 利用 includes
function unique5(arr) {
    if (!Array.isArray(arr)) {
        throw ('error in params')
    }

    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!resArr.includes(arr[i])) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// 利用递归去重
function unique6(arr) {
    let resArr = arr;
    let len = arr.length;

    arr.sort((a, b) => a - b);

    function loop(index) {
        if (index >= 1) {
            if (arr[index] === arr[index - 1]) {
                resArr.splice(index, 1);
            }
            loop(index - 1);
        }
    }
    loop(len - 1);
    return resArr;
}
