function totalWays(n, store) {
    if (n < 0)
        return 0;
    if (n === 0)
        return 1;
    if (store[n])
        return store[n];
    store[n] = totalWays(n - 1, store) + totalWays(n - 2, store);
    return store[n];
}
function climbStairs(n) {
    let store = new Array(n).fill(null);
    return totalWays(n, store);
}
;
//# sourceMappingURL=70.js.map