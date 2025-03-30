//   Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function middleNode(head) {
    if (!head)
        return head;
    let slowNode = head;
    let fastNode = head;
    while (fastNode !== null && fastNode.next !== null) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    return slowNode;
}
;
//# sourceMappingURL=876.js.map