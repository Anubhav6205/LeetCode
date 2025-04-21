bool isOperator(string s) {
    return s == "+" || s == "-" || s == "*" || s == "/";
}

int apply(int first, int second, string op) {
    if (op == "+") return first + second;
    if (op == "-") return first - second;
    if (op == "*") return first * second;
    if (op == "/") return first / second; // Assuming second != 0
    return 0;
}

int evaluate(vector<string>& arr) {
    stack<int> stk;
    for (string s : arr) {
        if (!isOperator(s)) {
            stk.push(stoi(s));  // number
        } else {
            int second = stk.top(); stk.pop();
            int first = stk.top(); stk.pop();
            stk.push(apply(first, second, s));
        }
    }
    return stk.top();
}