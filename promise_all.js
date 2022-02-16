// 1、promiseAll 接受一个 promises 数组
// 2、只有数组中的 promise 全部变为 resolve 的时候
// 3、返回一个 promise 实例
// 4、只要有一个失败，状态就变为 rejected


// 箭头函数实现
const promiseAll = promisesArr => {
    let ret = [];
    const len = promisesArr.length;
    let cnt = 0;
    return new Promise((resolve, reject) => {
      for (let val of promisesArr) {
        Promise.resolve(val).then((res) => {
          cnt++; 
          ret.push(res);
          if (cnt === len) {
            return resolve(ret);
          }
        },(err) => reject(err));
      }
    })
  } 
  
  // 在 promise 实例上新增一个 promiseAll 方法
  Promise.prototype.promiseAll1 = promiseAll;
  
  const pro1 = new Promise((res,rej) => {
    setTimeout(() => {
      res('1')
    },1000)
  })
  const pro2 = new Promise((res,rej) => {
    setTimeout(() => {
      res('2')
    },2000)
  })
  const pro3 = new Promise((res,rej) => {
    setTimeout(() => {
      res('3')
    },3000)
  })
  
  const proAll = promiseAll([pro1,pro2,pro3])
  .then(res => 
    console.log(res) // 3秒之后打印 ["1", "2", "3"]
  )
  


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

