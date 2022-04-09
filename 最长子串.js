s='abcabcbxb'

var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (len < 2) {
        return len
    }

    let max = 0; cur = [];
    for (let i = 0; i < len; i++) {
        const index = cur.indexOf(s[i])

        if (index !== -1) {
            max = Math.max(max, cur.length)
            cur.splice(0, index + 1)
        }
        cur.push(s[i])
    }
    return Math.max(cur.length, max)
}

console.log(lengthOfLongestSubstring(s))

const getSum = str => {
    const len = str.length
    if (len < 2) {
        return len
    }

    let max = 0, cur = [];
    for (let i = 0; i < len; i++) {
        const  index = s.indexOf(s[i])

        // 原有字符中存在该字符
        if (index !== -1) {
            max = Math.max(max, cur.length)
            cur.splice(0, index + 1);
        }
        // 不存在：将该字符推进去
        cur.push(s[i])
    }
    return Math.max(max, cur.length);
}