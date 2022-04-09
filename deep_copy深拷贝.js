
const oldObj = {
name: 'mimi',
age: 18,
colors: ['orange', 'green', 'blue'],
friend: {
    name: '小红'
    }
}

// function deepClone(obj) {
//     if (typeof obj !== 'object' || obj == null) {
//         return obj;
//     }


//     let res; 

//     if (obj instanceof  Array) {
//         res = [];
//     } else {
//         res = {}
//     }

//     for (let key of obj) {
//         res[key] = deepClone(obj[key]);
//     }

//     return res;
// }

// const newObj = deepClone(oldObj);
// newObj.friend.name = 'gougou'
console.log(oldObj);
// console.log(newObj);
// 方法一
let ans = JSON.parse(JSON.stringify(oldObj));
// 方法二
console.log(ans);
