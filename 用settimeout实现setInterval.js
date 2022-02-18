// setTimeout 实现 setInterval
const timeOutToInterval = (fn, interval) => {
  const innerFn = () => {
    setTimeout(innerFn, interval);
    fn();
  }
  setTimeout(innerFn, interval)
}

const test = () => {
  let a = 1;
  console.log(a);
}

console.log(timeOutToInterval(test, 1000));
