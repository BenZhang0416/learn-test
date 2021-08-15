let arr = Object.entires([...document.getElementsByTagName('*')].map(v => v.tagName).reduce((obj, cur) => {
    obj[a] ? obj[a] + 1 : 1;
    return obj;
}))

arr.sort((a, b) => b[1] - a[1]);
return arr.slice(0, 2);
