class MyQueue {
    public:
        stack<int>in,out;
        MyQueue() {
            
        }
        
        void push(int x) {
            in.push(x);
            
        }
        
        int pop() {
    
            peek();
            int front = out.top();
            out.pop();
            return front;
            
        }
        
        int peek() {
            if(out.empty()){
                while(!in.empty())
                {
                    int top = in.top();
                    in.pop();
                    out.push(top);
                }
            }
            return out.top();
            
        }
        
        bool empty() {
            return out.empty() && in.empty();
            
        }
    };
    
    /**
     * Your MyQueue object will be instantiated and called as such:
     * MyQueue* obj = new MyQueue();
     * obj->push(x);
     * int param_2 = obj->pop();
     * int param_3 = obj->peek();
     * bool param_4 = obj->empty();
     */