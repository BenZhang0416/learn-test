function pAll(_promises) { 
    //_promises 是迭代器
    return new Promise((resolve, reject) => {
        const promises = Array.from(_promises);
        const r = [];
        const len = promises.length;
        let count = 0;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(o => {
                r[i] = o;
                if (++count === len) {
                    resolve(r);
                }
            }).catch(e => reject(e))
        }
    })
}


s1 = "leetcode";
s2 = "loveleetcode"

var fristUniqChar = function(s) {
    const map = {};
    for (let v of s) map[v] = (map[v] || 0) + 1;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
        return -1;
    }
}

console.log(fristUniqChar(s1))

// promise.race 竞态
function promise_race(args) {
    return new Promise((resolve, reject) => {
        for (let i = 0, len = args.length; i < len; i++) {
            arg[i].then(resolve, reject)
        }
    })
}

