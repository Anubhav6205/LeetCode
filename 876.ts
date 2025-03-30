
//   Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 

function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return head;
    let slowNode:ListNode | null = head;
    let fastNode: ListNode | null= head;
    while(fastNode !== null && fastNode.next!==null)
    {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    return slowNode;
};