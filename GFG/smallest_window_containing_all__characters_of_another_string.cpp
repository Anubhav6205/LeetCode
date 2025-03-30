//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the smallest window in the string s1 consisting
    // of all the characters of string s2.
    string smallestWindow(string &s1, string &s2) {
        // Your code here
          map<char,int>s2m,exm,curm;
        int min_len=INT_MAX;
        string min_str="";
        int j=0;
        for(char ch:s2){
            s2m[ch]++;

        }
      
        for(int i=0;i<s1.length();i++)
        {
 
            if(s2m[s1[i]]>curm[s1[i]])
            {
                curm[s1[i]]++;
            }
            else
            {
                exm[s1[i]]++;
            }
            while(curm==s2m)
            {
                if(i-j+1<min_len)
                {
                    min_len=i-j+1;
                    min_str=s1.substr(j,min_len);
                }
                if(exm[s1[j]]>0)
                {
                    exm[s1[j]]--;
                }
                else
                {
                curm[s1[j]]--;
                }
                j++;
            }
          
        }
  
        
return min_str;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string s1;
        cin >> s1;
        string s2;
        cin >> s2;
        Solution obj;
        string str = obj.smallestWindow(s1, s2);
        if (str.size() == 0) {
            cout << "\"\"" << endl;
        } else {
            cout << str << endl;
        }
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends