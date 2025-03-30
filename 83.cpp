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
            ListNode* start = head;
            ListNode* end = head;
            while (start != NULL && start->next != NULL) {
                end = start->next;
                while (end && start->val == end->val)
                    end = end->next;
    
                start->next = end;
                start = start->next;
            }
            return head;
        }
    };