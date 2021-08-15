// 判读是否有环
function has(listNode) {
    while(listNode) {
        if(hasFlag) {
            return true;
        } else {
            hasFlag = true;
            listNode = listNode.next
        }
    }
    return false;
}

// 快慢指针
function hasCycle(head) {
    let fast = head;
    let slow = head;
    let cur = head;

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            while(cur != slow) {
                cur = cur.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
}


// 相交链表
function mix(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB) {
        pA = pA.next ? pA.next : pB;
        pB = pB.next ? pB.next : pA;
    }
    return pA;
}

// 中间节点
function mid(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

// 倒数第 k 个节点
function K(head) {
    let fast = head;
    let slow = head;

    let cur = 0;
    while (cur < k) {
        fast = fast.next;
        cur++
    }

    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

// 链表相加
function addTwo(l1, l2) {
    const l3 = new ListNode(0) 
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
    }

    if(carry) {
        p3.next = new ListNode(carry);
    }

    return l3.next;
}