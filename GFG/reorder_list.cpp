//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

/* Link list Node */
struct Node {
    int data;
    struct Node* next;

    Node(int x) {
        data = x;
        next = nullptr;
    }
};

void printList(Node* node) {
    while (node != NULL) {
        cout << node->data << " ";
        node = node->next;
    }
    cout << "\n";
}

void freeList(struct Node* head) {
    struct Node* temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        delete temp;
    }
}


// } Driver Code Ends

/* Following is the Linked list node structure */

/*
struct Node
{
    int data;
    struct Node* next;

    Node(int x){
        data = x;
        next = NULL;
    }
};
*/

class Solution {
  public:
  
    Node* reverse(Node* head)
    {
        Node* curr = head;
        Node* prev = nullptr;
        while(curr)
        {
            Node* next = curr -> next;
            curr -> next = prev;
            prev = curr; 
            curr = next;
        }
        return prev;
    }
    void reorderList(Node* head) {
        // Your code here
        if(!head ||(head && !head->next)) return;
        Node* slow = head;
        Node* fast = head;
        Node* prev = nullptr;
        while(fast && fast->next)
        {
            prev = slow;
            slow = slow -> next;
            fast = fast -> next -> next;
        }
        prev -> next = nullptr;
        Node* secHead = reverse(slow);
        Node* dummy = new Node(0);
        Node* save = dummy;
        while(head && secHead)
        {
            dummy -> next = head;
            head = head -> next;
            dummy = dummy -> next;
            dummy -> next = secHead;
            secHead = secHead -> next;
            dummy = dummy -> next;
        }
        dummy -> next = head ? head : secHead;
        
        head = save -> next;
        
    }
};


//{ Driver Code Starts.

// Driver program to test above functions
int main() {
    int t, k;
    cin >> t;
    cin.ignore(); // Ignore the newline character after t

    while (t--) {
        string input;
        getline(cin, input); // Read the entire line for the array elements

        stringstream ss(input);
        Node *head = nullptr, *tail = nullptr;
        int x;

        if (ss >> x) {
            head = new Node(x);
            tail = head;

            while (ss >> x) {
                tail->next = new Node(x);
                tail = tail->next;
            }

            // Link the last node to the head if k is 1 to make it circular
            if (k == 1) {
                tail->next = head;
            }
        }

        Solution ob;
        ob.reorderList(head);
        printList(head);
        freeList(head);
    }
    return 0;
}

// } Driver Code Ends