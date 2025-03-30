function checkMatch(char: string, topItem: string): boolean {
    let brackets = topItem + char;
    return brackets === "()" || brackets === "[]" || brackets === "{}";
}

function isOpeningBracket(char: string): boolean {
    return char === "{" || char === "[" || char === "(";
}

class Stack {
    private stk: any[] = [];

    constructor() {}

    pushItem(item: any): void {
        this.stk.push(item);
    }

    popItem(): any {
        if (this.isEmpty()) return null;
        return this.stk.pop(); // Directly pop and return the top item
    }

    peek(): any {
        if (this.isEmpty()) return null; // Handle empty stack case
        return this.stk[this.stk.length - 1];
    }

    size(){
        return this.stk.length;
    }
    isEmpty(): boolean {
        return this.stk.length === 0;
    }
}

function isValid(s: string): boolean {
    let stk = new Stack();

    for (let i = 0; i < s.length; i++) {
        if (isOpeningBracket(s[i])) {
            stk.pushItem(s[i]);
        } else {
            let top = stk.peek();
            if (top !== null && checkMatch(s[i], top)) {
                stk.popItem();
            } else {
                return false; // Invalid match or unmatched closing bracket
            }
        }
    }

    // If stack is empty, all brackets are matched; otherwise, invalid
    return stk.isEmpty();
}

