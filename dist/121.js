function maxProfit(prices) {
    let maxPrice = 0;
    let profit = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        profit = Math.max(maxPrice - prices[i], profit);
    }
    return profit;
}
;
//# sourceMappingURL=121.js.map