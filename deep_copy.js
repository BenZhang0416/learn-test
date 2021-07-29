const oldObj = {
    name: 'mimi',
    age: 18,
    colors: ['orange', 'green', 'blue'],
    friend: {
        name: '小红'
    }
}

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }


    let res; 

    if (obj instanceof  Array) {
        return [];
    } else {
        return {}
    }

    for (let key of obj) {
        res[key] = deepClone(obj[key]);
    }

    return res;
}


const newObj = deepClone(oldObj);
newObj.friend.name = 'gougou'
console.log(oldObj);
console.log(newObj);