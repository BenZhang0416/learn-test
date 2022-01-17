// 下划线转驼峰
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter) {
        return letter.toUpperCase();
    })
}

let a = 'a_b2_345_c2345';
console.log(toHump(a));

// 驼峰转下划线
function toLine(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
let b = 'aBdaNf';
console.log(toLine(b));

// 对象驼峰转下划线,正则转换
function objectHumpToLine(obj) {
    var newObj = new Object()
    for (let key in obj) {
        newObj[key.replace(/([A-Z])/g, "_$1").toLowerCase()] = obj[key]
    }
    return newObj
}
