/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    public:
        ListNode* partition(ListNode* head, int x) {
            ListNode* headA = new ListNode(0);
            ListNode* headB = new ListNode(0);
            ListNode* tailA = headA;
            ListNode* tailB = headB;
    
            ListNode* itr = head;
    
            while (itr) {
    
                ListNode* curr = itr;
                itr = itr->next;
                if (curr->val < x) {
    
                    tailA->next = curr;
                    tailA = tailA->next;
                } else {
    
                    tailB->next = curr;
                    tailB = tailB->next;
                }
            }
            tailB->next = nullptr;
            tailA->next = headB->next;
            return headA->next;
        }
    };