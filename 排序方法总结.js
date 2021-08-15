// 快速排序
arr = [3, 7, 2, 1, 9, 4, 6, 8, 5];

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let key = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < key) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return QuickSort(left).concat([key], QuickSort(right))
}
console.log(QuickSort(arr))



// 选择排序
arr = [3, 7, 2, 1, 9, 4, 6, 8, 5];
let SelectSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let curMinIndex = i; //下标操作
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[curMinIndex]) {
                curMinIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[curMinIndex];
        arr[curMinIndex] = temp;
    }
    return arr;
}
console.log(SelectSort(arr));



// 冒泡排序
arr = [3, 7, 2, 1, 9, 4, 6, 8, 5];
let bSort = (arr) => {
    // 外层循环
    for(let i = 0; i < arr.length - 1; i++) {
        var flag = false;
        // 内层循环
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j]>arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =swap;
            }
        }
    }
    if(!flag) {
        return arr;
    }
    return arr;
}
console.log(bSort(arr));



//插入排序
arr = [3, 7, 2, 1, 9, 4, 6, 8, 5];
function InsertSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i]; //当前位置
        let j = i - 1; //插入位置下标
        while (j >= 0 && arr[j] > cur) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = cur;
    }
    return arr;
}
console.log(InsertSort(arr))
