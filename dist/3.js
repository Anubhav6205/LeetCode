class qu {
    constructor() {
        this.q = [];
    }
    enqueue(item) {
        this.q.push(item);
    }
    dequeue() {
        let item = this.q[0];
        if (this.q.length === 1) {
            this.q = [];
            return item;
        }
        let i = 0;
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q[i] = this.q[i + 1];
        }
        this.q.pop();
        return item;
    }
    size() {
        return this.q.length;
    }
    check() {
        return this.q;
    }
    peek() {
        return this.q[0];
    }
}
function lengthOfLongestSubstring(s) {
    let maxi = Number.MIN_SAFE_INTEGER;
    let q = new qu();
    let unq = new Set();
    for (let i = 0; i < s.length; i++) {
        if (unq.has(s[i])) {
            while (q.peek() !== s[i]) {
                let del = q.dequeue();
                unq.delete(del);
            }
            q.dequeue();
            q.enqueue(s[i]);
        }
        else {
            unq.add(s[i]);
            q.enqueue(s[i]);
        }
        maxi = Math.max(maxi, q.size());
    }
    maxi = Math.max(maxi, q.size());
    return maxi;
}
//# sourceMappingURL=3.js.map