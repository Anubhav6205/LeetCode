class MyStack {
    public:
        queue<int> q1, q2;
        MyStack() {}
    
        void push(int x) {
            while (!q1.empty()) {
                int front = q1.front();
                q1.pop();
                q2.push(front);
            }
            q1.push(x);
            while (!q2.empty()) {
                int front = q2.front();
                q2.pop();
                q1.push(front);
            }
        }
    
        int pop() {
            if (!empty()) {
                int front = q1.front();
                q1.pop();
                return front;
            }
            return 0;
        }
    
        int top() {
            if (!empty())
                return q1.front();
    
            return 0;
        }
    
        bool empty() { return q1.empty(); }
    };
    
    /**
     * Your MyStack object will be instantiated and called as such:
     * MyStack* obj = new MyStack();
     * obj->push(x);
     * int param_2 = obj->pop();
     * int param_3 = obj->top();
     * bool param_4 = obj->empty();
     */