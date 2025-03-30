class Solution {
    public:
        int strStr(string haystack, string needle) {
            int ndlen = needle.length();
            if(haystack.length()<ndlen) return -1; 
            for(int i=0;i<=haystack.length()-ndlen;i++)
            {
                if(haystack.substr(i,ndlen)==needle)
                return i;
    
            }
            return -1;
        }
    };