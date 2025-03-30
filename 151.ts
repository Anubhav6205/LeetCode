class Solution {
    public:
        string reverseWords(string s) {
            stack<string> stk;
            string word = "";
            for (int i = 0; i < s.length();i++) {
                if (s[i] != ' ') {
                    word += s[i];
                }
                else if(word != "") {
                    stk.push(word);
                    word = "";
                }
            }
            if (word != "")
                stk.push(word);
            string ans;
            while (!stk.empty()) {
                ans += stk.top();
                if (stk.size() > 1) {
                    ans += ' ';
                }
                stk.pop();
            }
            return ans;
        }
    };