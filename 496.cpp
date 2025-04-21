class Solution {
  public:
      vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
          stack<int> s;
          unordered_map<int, int> mp;
          for (int i = nums2.size() - 1; i >= 0; i--) {
              int curr = nums2[i];
              while (!s.empty() && s.top() < curr)
                  s.pop();
  
              if (!s.empty())
                  mp.insert({curr, s.top()});
              else
                  mp.insert({curr, -1});
  
              s.push(curr);
          }
          for (int i = 0; i < nums1.size(); i++) {
              nums1[i] = mp[nums1[i]];
          }
          return nums1;
      }
  };