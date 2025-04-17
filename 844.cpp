class Solution {
    public:
        bool backspaceCompare(string s, string t) {
            string a = "", b = "";
            stack<char> stk;
            for (int i = 0; i < s.length(); i++) {
                if (s[i] == '#') {
                    if (!stk.empty())
                        stk.pop();
                } else {
                    stk.push(s[i]);
                }
            }
            while (!stk.empty()) {
                a += stk.top();
                stk.pop();
            }
            for (int i = 0; i < t.length(); i++) {
                if (t[i] == '#') {
                    if (!stk.empty())
                        stk.pop();
                } else {
                    stk.push(t[i]);
                }
            }
            while (!stk.empty()) {
                b += stk.top();
                stk.pop();
            }
            return a == b;
        }
    };