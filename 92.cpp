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
        ListNode* reverseBetween(ListNode* head, int left, int right) {
    
            ListNode* dummy = new ListNode(0);
            dummy->next = head;
            ListNode* start = dummy;
            ListNode* end = head;
            while (right--) {
                end = end->next;
            }
            while (--left) {
                start = start->next;
            }
            start->next = reverseandjoin(start->next, end);
    
            return dummy->next;
        }
    
        ListNode* reverseandjoin(ListNode* start, ListNode* end) {
            ListNode* prev = end;
            ListNode* nxt;
            ListNode* curr = start;
    
            while (curr && curr!=end) {
                nxt = curr->next;
                curr->next = prev;
                prev = curr;
                curr = nxt;
            }
    
            return prev;
        }
    };