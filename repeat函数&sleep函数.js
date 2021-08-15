

// 实现一个repeat函数
function red() {
    console.log('red')
}

function repeat(fre, time, arg) {
    for (let i = 0; i < fre; i++) {
        setTimeout(() => {
            arg()
        }, i * time);
    }
}
repeat(5,1000,red)

//  实现一个sleep函数（让进程挂起一段时间）

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

const sleep1 = seconds => new Promise(resolve => setTimeout(resolve, seconds))

sleep(3000).then((time) => {
    console.log(`睡眠了${time / 1000}s,然后开始做事`)
})

String.prototype._repeat = function(n) {
    return new Array(n+1).join(this)
}
a = 'abs'
console.log(a._repeat(3)) 