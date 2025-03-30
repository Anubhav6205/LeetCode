#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int calculate(string s) {
        stack<int> s1, s2;

        // Pushing digits and operators to stack s1
        for (char c : s) {
            if(c==' ') continue;
            if (isdigit(c)) {
                s1.push(c - '0');  // Convert char digit to int
            } else {
                s1.push(c);
            }
        }

        char sym[] = {'/', '*', '+', '-'};

        for (char c : sym) {
            while (!s1.empty()) {
                char top = s1.top();
                s1.pop();
                if (isOperator(top)) {
                    int b = s2.top(); s2.pop();
                    int a = s1.top(); s1.pop();
                    int ans = calc(a, b, top);
                    s2.push(ans);
                } else {
                    s2.push(top);
                }
            }
            swap(s1, s2);
        }
        return s1.top();
    }

    bool isOperator(char c) {
        return (c == '/' || c == '*' || c == '+' || c == '-');
    }

    int calc(int a, int b, char c) {
        switch (c) {
            case '/': return div(a, b);
            case '+': return add(a, b);
            case '-': return sub(a, b);
            case '*': return multi(a, b);
        }
        return 0;
    }

    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int div(int a, int b) { return floor(a / b); }
    int multi(int a, int b) { return a * b; }
};

int main() {
    Solution sol;
    string expression = "3+5 / 2  ";  // Example expression
    int result = sol.calculate(expression);
    cout << "Result: " << result << endl;
    return 0;
}
