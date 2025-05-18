function dailyTemperatures(temp: number[]): number[] {
    let n = temp.length;
    let ansArr:number[] = new Array(n).fill(0);
    let stk: number[] = [];
    for (let i =n - 1; i >= 0; i--) {
        while (stk.length > 0 && temp[stk[stk.length-1]] <= temp[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            ansArr[i] = stk[stk.length-1] - i;            
        }
        stk.push(i);
    }
    return ansArr;

};