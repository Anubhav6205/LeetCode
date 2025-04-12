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
        ListNode* deleteDuplicates(ListNode* head) {
            ListNode* itr = head;
            ListNode* prev = new ListNode(0);
            ListNode* newHead = prev;
            while (itr) {
                ListNode* itr2 = itr->next;
                if (itr2 && itr->val == itr2->val) {
                    while (itr2 && itr->val == itr2->val) {
                        itr2 = itr2->next;
                    }
                    prev->next = itr2;
                    itr = itr2;
    
                } else {
                    prev->next = itr;
                    prev = prev->next;
                    itr = itr->next;
                }
            }
            return newHead->next;
        }
    };