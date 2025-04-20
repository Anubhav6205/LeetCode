//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    void pb(deque<int>& dq, int x) {
        // code here
        dq.push_back(x);
    }

    void ppb(deque<int>& dq) {
        if(!dq.empty())
            dq.pop_back();
        // code here
    }

        
    int front_dq(deque<int>& dq) {
        // code here
        if(!dq.empty())
            return dq.front();
            
        return -1;
    }
        

    void pf(deque<int>& dq, int x) {
        // code here
        dq.push_front(x);
    }
};


//{ Driver Code Starts.
int main() {
    int testcase;
    cin >> testcase;
    Solution sol;

    while (testcase--) {
        deque<int> dq;
        int queries;
        cin >> queries;

        while (queries--) {
            string s;
            cin >> s;

            if (s == "pb") {
                int x;
                cin >> x;
                sol.pb(dq, x);
                cout << dq.back() << endl;
            }

            if (s == "pf") {
                int x;
                cin >> x;
                sol.pf(dq, x);
                cout << dq.front() << endl;
            }

            if (s == "pp_b") {
                sol.ppb(dq);
                cout << dq.size() << endl;
            }

            if (s == "f") {
                int x = sol.front_dq(dq);
                cout << x << endl;
            }
        }
        dq.clear();
        cout << "~" << endl;
    }

    return 0;
}

// } Driver Code Ends