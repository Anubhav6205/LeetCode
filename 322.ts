const maxNum = 100000;
function coinChange(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a);
    let dp:Map<string,number> = new Map();
    let minVal = minCount(coins, amount, 0, dp);
    return minVal >= maxNum ? -1 : minVal;
};

function minCount(coins: number[], amount: number, idx: number, dp:Map<string,number>) {
    if (amount <= 0) {
        return amount < 0 ? maxNum : 0;
    }

    if (idx > coins.length - 1) {
     return maxNum;
    }
    let key = amount+'-'+idx;
    if(dp.has(key)) return dp.get(key)
    let skipCurrentAndMove = minCount(coins, amount, idx + 1,dp);
    let takeCurrentAndStay = amount >= coins[idx] ? 1 + minCount(coins, amount-coins[idx], idx,dp) : maxNum;
    dp.set(key, Math.min(takeCurrentAndStay, skipCurrentAndMove));
    return dp.get(key);
}