//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends



class twoStacks {
  public:

    vector<int>v;
    int top1;
    int top2;


     twoStacks() : v(100, 0), top1(-1), top2(101) {}

    // Function to push an integer into the stack1.
    void push1(int x) {
        // code here
        if(top1 == top2 - 1) return;
          top1++;
        v[top1] = x;
      
      
        
    }

    // Function to push an integer into the stack2.
    void push2(int x) {
        // code here
       if(top1 == top2 - 1) return;
        top2--;
        v[top2] = x;
  
   
    }

    // Function to remove an element from top of the stack1.
    int pop1() {
        // code here
        if(top1 < 0) return -1;
        int top = v[top1];
        top1--;
        return top;
    }

    // Function to remove an element from top of the stack2.
    int pop2() {
        // code here
        if(top2 > v.size()) return -1;
        int top = v[top2];
        top2++;
        return top;
    }
};



//{ Driver Code Starts.

int main() {

    int T;
    cin >> T;
    while (T--) {
        twoStacks *sq = new twoStacks();

        int Q;
        cin >> Q;
        while (Q--) {
            int stack_no;
            cin >> stack_no;
            int QueryType = 0;
            cin >> QueryType;

            if (QueryType == 1) {
                int a;
                cin >> a;
                if (stack_no == 1)
                    sq->push1(a);
                else if (stack_no == 2)
                    sq->push2(a);
            } else if (QueryType == 2) {
                if (stack_no == 1)
                    cout << sq->pop1() << " ";
                else if (stack_no == 2)
                    cout << sq->pop2() << " ";
            }
        }

        cout << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends