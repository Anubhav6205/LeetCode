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
        bool isPalindrome(ListNode* head) {
            ListNode* slow = head;
            ListNode* fast = head;
            //null or one node will always be true
            if (!head || !head->next) {
                return true;
            }
    
            //finding mid node
            while (fast && fast->next) {
                slow = slow->next;
                fast = fast->next->next;
            }
            //getting the new mid node
            ListNode* newMid = reverse(slow);
            slow = head;
    
            //iterting through reversed and orignal nodes for reversed nodes length
            while (newMid && slow) {
                if (newMid->val != slow->val)
                    return false;
    
                newMid = newMid->next;
                slow = slow->next;
            }
            return true;
    
            //Could track prev while finding mid and point that back to re-reversed node list
        }
    
        ListNode* reverse(ListNode* head) {
            ListNode* current = head;
            ListNode* prev;
            ListNode* nxt;
            while(current)
            {
                nxt = current->next;
                current->next = prev;
                prev = current;
                current = nxt;
            }
            return prev;
        }
    };