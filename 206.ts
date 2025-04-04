/**
 * Definition for singly-linked list.*/


  struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
 };
 
class Solution {
    public:
        ListNode* reverseList(ListNode* head) { return reversedList(head); }
    
        ListNode* reversedList(ListNode* head) {
            ListNode* prev = nullptr;
            ListNode* nxt = nullptr;
            ListNode* curr = head;
            while (curr) {
                nxt = curr->next;
                curr->next = prev;
                prev = curr;
                curr = nxt;
            }
            return prev;
        }
    };