class Solution {
    public:
        ListNode* mergeKLists(vector<ListNode*>& lists) {
            // Step 1: Create head and itr nodes
            ListNode* head = new ListNode(0);
            ListNode* itr = head;
    
            // Step 2: Create a min-heap with (value, node) pairs
            priority_queue<pair<int, ListNode*>, vector<pair<int, ListNode*>>, greater<pair<int, ListNode*>>> pq;
    
            // Step 3: Iterate over each list
            for (auto& list : lists) {
                ListNode* current = list;
    
                // Step 4: Traverse the current list and push all nodes into pq
                while (current) {
                    pq.push({current->val, current});
                    current = current->next;
                }
            }
    
            // Step 5: Pop elements from pq and build the merged list
            while (!pq.empty()) {
                auto top = pq.top();
                pq.pop();
                itr->next = top.second;
                itr = itr->next;
            }
    
            // Step 6: Ensure the last node points to null
            itr->next = nullptr;
    
            // Step 7: Return the merged list (skip dummy head)
            return head->next;
        }
    };
    