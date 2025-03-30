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
        int getDecimalValue(ListNode* head) {
            return findFinalNode(head).second;
        }
        
        pair<int,int> findFinalNode(ListNode* head){
            if(head->next == NULL)
                return make_pair(1,head->val*pow(2,0));
    
            pair<int,int> values = findFinalNode(head->next);
            return make_pair(values.first+1,(pow(2,values.first)*head->val)+values.second);
        }
    };