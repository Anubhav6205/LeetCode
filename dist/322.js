class Stack {
    constructor() {
        this.stk = [];
    }
    pushItem(item) {
        this.stk.push(item);
    }
    popItem() {
        if (this.isEmpty())
            return null;
        return this.stk.pop(); // Directly pop and return the top item
    }
    peek() {
        if (this.isEmpty())
            return null; // Handle empty stack case
        return this.stk[this.stk.length - 1];
    }
    size() {
        return this.stk.length;
    }
    isEmpty() {
        return this.stk.length === 0;
    }
}
function coinChange(coins, amount) {
    coins.sort();
    let stk = new Stack();
    let count = 0;
    coins.forEach((coin) => { stk.pushItem(coin); });
    while (amount > 0 && stk.size() !== 0) {
        while (stk.peek() < amount) {
            amount -= stk.peek();
            count++;
        }
        while (stk.peek() > amount) {
            stk.popItem();
        }
        if (stk.size() > 0 && stk.peek() === amount) {
            count++;
            break;
        }
    }
    if (amount > 0)
        return -1;
    return count;
}
;
console.log(coinChange([1, 2, 5], 11));
//# sourceMappingURL=322.js.map