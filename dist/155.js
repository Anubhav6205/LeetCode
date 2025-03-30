class MinStack {
    constructor() {
        this.stack = [];
        this.minStk = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.minStk.length === 0) {
            this.minStk.push(val);
        }
        else {
            if (this.minStk[this.minStk.length - 1] >= val) {
                this.minStk.splice(this.minStk.length, 0, val);
            }
            else {
                for (let i = 0; i < this.minStk.length; i++) {
                    if (this.minStk[i] <= val) {
                        this.minStk.splice(i, 0, val);
                        break;
                    }
                }
            }
        }
    }
    pop() {
        const poppedEl = this.top();
        this.stack.pop();
        for (let i = 0; i < this.minStk.length; i++) {
            if (this.minStk[i] === poppedEl) {
                this.minStk.splice(i, 1);
                break;
            }
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStk[this.minStk.length - 1];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//# sourceMappingURL=155.js.map