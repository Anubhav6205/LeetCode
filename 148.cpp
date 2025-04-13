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
        ListNode* sortList(ListNode* head) {
            if (!head || !head->next) {
                return head;
            }
            ListNode* secondHead = sliceList(head);
            ListNode* left = sortList(head);
            ListNode* right = sortList(secondHead);
            return mergeList(left, right);
        }
    
        ListNode* mergeList(ListNode* left, ListNode* right) {
            ListNode* dummy = new ListNode(0);
            ListNode* itr = dummy;
            while (left && right) {
                if (left->val > right->val) {
                    itr->next = right;
                    itr = itr->next;
                    right = right->next;
                } else {
                    itr->next = left;
                    itr = itr->next;
                    left = left->next;
                }
            }
           
           itr -> next = left ? left : right;
            return dummy->next;
        }
    
        ListNode* sliceList(ListNode* head) {
            ListNode* prev = nullptr;
            ListNode* slow = head;
            ListNode* fast = head;
            while (fast && fast->next) {
                prev = slow;
                slow = slow->next;
                fast = fast->next->next;
            }
            prev->next = nullptr;
            return slow;
        }
    };