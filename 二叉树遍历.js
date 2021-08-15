// 前中后序的意思是指对根的访问顺序，前序即是最先访问根，后序是最后访问根
// 前序遍历---先访问根节点，再先序遍历左子树，最后再先序遍历右子树，即 根 -- 左 -- 右
// 递归实现
function preOrder(root) {
    let res = [];
    if(!root) {
        return ;
    }

    res.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
}


// 非递归实现   根 -- 左 -- 右
// 初始化一个栈和结果数组，将根节点放入栈中，当栈不为空时，重复下面的步骤
// 1、取出栈顶元素top， 访问top
// 2、取 top 的右子节点不为空，将右子节点放入栈中
// 3、取 top 的左子节点不为空，将左子节点放入栈中
// 4、取出栈顶元素 top 放入栈中

function preOrder1(root) {
    if(!root){
        return [];
    }
    var res = [];
    var stack = [root];
    while(stack.length) {
        var top = stack.pop();
        if(top.right) {
            stack.push(top.right);
        }
        if(top.left) {
            stack.push(top.left);
        }
        res.push(top.val);
    }
    return res;
}


// 中序遍历
// 基本思想：先中序遍历左子树，然后访问根节点，最后再中序遍历右子树，即 左 -- 根 -- 右

// 递归实现
function inOrder(root) {
    if(!root) {
        return;
    }

    let res = [];
    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
    return res;
}


// 非递归实现 左 -- 根 -- 右
// 初始化一个栈和结果数组，当栈不为空时，重复下面的步骤
// 1、将根节点和所有的左子节点放入栈中，直到没有左子节点
// 2、栈顶元素出栈，存入结果数组，将出栈的元素作为根节点
// 3、查看该根节点右子节点是否有左子节点，若有就入栈，否则就出栈

function inOrder1(root) {
    if(!root) {
        return;
    }
    var res = [];
    var stack = [];
    while(stack.length || root) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}


// 后序遍历 左 -- 右 -- 根 基本思想： 先后序遍历右子树，然后再后序遍历右子树，最后访问根节点
function lateOrder(root) {
    if(!root) return root;
    let res = [];
    lateOrder(root.left)
    lateOrder(root.right);
    res.push(root.val);
    return res;
}


// 非递归实现：
// 初始化一个栈和结果数组，将根节点放入栈中，当栈不为空时，重复下面的步骤
// 1、取出栈顶元素top，访问top
// 2、将取出的栈顶元素 top 放入结果数组的最开始
// 3、若top的左子节点不为空， 将 top 的左子节点放入栈中
// 4、若top的右子节点不为空，将top的右子节点放入栈中

function postOrder(root) {
    if(!root) return root;
    var stack = [root];
    let res = [];
    while(stack.length) {
        var top = stack.pop();
        res.unshift(top.val);
        if(top.left) {
            stack.push(top.left);
        }
        if(top.right) {
            stack.push(top.right);
        }
    }
    return res;
}


// 二叉树层序遍历
// 基本思想：层序遍历就是从上到下，从左到右打印二叉树的节点

// 创建一个数组存放结果，一个队列存放二叉树的节点，如果存放二叉树的队列不为空，就重复下面的步骤
// 1、将队列的第一个节点作为根节点，并放入结果数组中
// 2、如果该根节点的左子节点不为空，就将其放入队列中
// 3、如果该根节点的右子节点不为空，就将其放入队列中
function leveSearch(root) {
    if(!root) return root;
    let res = [];
    let queue = [root];

    while(queue.length) {
        let node = queue.shift();
        res.push(node.val);
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return res;
}