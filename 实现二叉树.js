// 定义一个树的构造函数
function tree(val, left, right) {
    this.value = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}

function dfs(tree) {
    let ans = [];
    if (!tree) {
        return;
    } else {
        ans.push(tree.val);
    }
    dfs(tree.left);
    dfs(tree.right);
    return ans;
}



function listNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

// 递归
function reverseList(head) {
    if(head.length === 0 || head.length === 1) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead
}

// 迭代
function reverseList1(head) {
    if(head.length === 0 || head.length === 1) return head;
    let curr = head;
    let pre = null;
    while (curr) {
        const temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = temp;
    }
}
