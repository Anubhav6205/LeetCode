class Solution {
    public:
        vector<string> generateParenthesis(int n) {
            vector<string> ans;
            findAllPossibility(ans, n, n, "");
            return ans;
        }
    
        void findAllPossibility(vector<string>& ans, int op, int cl, string str) {
            
            if (op ==  0 && cl == 0) {
                // cout<<str<<endl;
                ans.push_back(str);
                return;
            }
            if(op<0 || cl<0)
            {
                // cout<<op<<" "<<cl<<endl;
                return;
            }
            if (op ==  cl) {
    
                findAllPossibility(ans, op-1, cl, str + '(');
            } else {
                if (op != 0) {
    
                    findAllPossibility(ans, op-1, cl, str + '(');
                }
                if (cl != 0 && op < cl) {
    
                    findAllPossibility(ans, op, cl-1, str + ')');
                }
            }
        }
    };