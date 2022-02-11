// 交通灯
//版本一： 数据抽象（分离）、声明式写法
const stateList = [
  {state: 'red', 'last': 3000},
  {state: 'yellow', 'last': 2000},
  {state: 'green', 'last': 1000}
];


function light(stateArr) {
  function applyState(stateIdx) {
    const {state, last} = stateArr[stateIdx];
    setTimeout(() => {
      applyState((stateIdx + 1) % stateArr.length);
      console.log(state);
    }, last);
  }
  applyState(0);
}

// light(stateList);

// 版本二：过程抽象
// 第一步，切换信号灯
function poll(...fnList) {
  let stateIdx = 0;
  return function (...args) {
    let fn = fn[stateIdx++ % fnList.length];
    return fn.apply(this, args);
  }
}

// 第二步，让灯亮起不同的颜色
function setColor(state) {
  console.log(state);
}

// 第三步，将数据放入
// let trafficLight = poll(setColor(null));

// 版本三：异步转换为同步写法，利用promise
// 两个行为：1、亮灯； 2、等待
function lightBulb(color) {
  console.log(color);
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

async function start() {
  while (true) {
    lightBulb('red');
    wait(3000);
    lightBulb('yellow');
    wait(2000);
    lightBulb('green');
    wait(1000)
  }
}

start()

