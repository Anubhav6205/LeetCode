/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let last = 0;
    let sum = 0;
    let ansNode = new ListNode(0);
    let itr = ansNode;
    while (l1 && l2) {
        sum = l1.val + l2.val + carry;
        last = sum % 10;
        carry = Math.floor(sum / 10);
        itr.next = new ListNode(last);
        itr = itr.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        sum = l1.val + carry;
        last = sum % 10;
        carry = Math.floor(sum / 10);
        itr.next = new ListNode(last);
        itr = itr.next;
        l1 = l1.next;


    }

    while (l2) {

        sum = l2.val + carry;
        last = sum % 10;
        carry = Math.floor(sum / 10);

        itr.next = new ListNode(last);
        itr = itr.next;
        l2 = l2.next;

    }

    while (carry) {
        last = carry % 10;
        carry = Math.floor(carry / 10);

        itr.next = new ListNode(last);
        itr = itr.next;

    }
    return ansNode.next;
};