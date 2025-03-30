class Solution {
    public:
        string longestCommonPrefix(vector<string>& strs) {
            string first = strs[0];
            int slc = first.length();
    
            auto startsWith = [](string s, string sub) {
                return s.substr(0, sub.length()) == sub;
            };
            while (slc > -1) {
                string fCopy = first.substr(0,slc);
                bool found = true;
                for (string s : strs) {
                    if (!startsWith(s, fCopy)) {
                        cout<<s<<" "<<fCopy<<" "<<slc<<endl; 
                        found = false;
                        break;
                    }
                }
    
                if (found) {
                    return fCopy;
                }
                slc--;
            }
            return "";
        }
    };