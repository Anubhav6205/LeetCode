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
        ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
            l1 = reversedList(l1);
            l2 = reversedList(l2);
            int carry = 0;
            int sum = 0;
            ListNode* dummy = new ListNode(0);
            ListNode* sumHead = dummy;
            while (l1 || l2 || carry) {
                sum = 0;
                if (l1) {
                    sum += l1->val;
                    l1 = l1->next;
                }
                if (l2) {
                    sum += l2->val;
                    l2 = l2->next;
                }
                if (carry) {
                    sum += carry;
                }
                carry = sum / 10;
                sum %= 10;
                dummy->next = new ListNode(sum);
                dummy = dummy->next;
            }
            return reversedList(sumHead->next);
        }
    
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