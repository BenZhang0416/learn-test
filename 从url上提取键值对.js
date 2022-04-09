const url = 'https://www.nowcoder.com/discuss/513428?type=all&order=recall&pos=&page=1&ncTraceId=&channel=-1&source_id=search_all_nctrack&gio_id=17EA463242839A6273C1958D1B3CBD1C-1645426291177';

const getKeyVal = str => {
  const arr = str.split('?');
  const right = arr[1];
  const rightStrArr = right.split('&');
  let map = new Map();
  for (let i = 0; i < rightStrArr.length; i++) {
    const element = rightStrArr[i];
    const key = element.split('=')[0];
    const val = element.split('=')[1];
    map.set(key, val);
  }
  return map;
}

console.log(getKeyVal(url));