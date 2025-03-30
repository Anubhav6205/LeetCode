function totalWays(n: number, store:number[]): number {
    if(n<0) return 0;
    if(n===0) return 1;
    if(store[n]) return store[n];
    store[n] = totalWays(n-1,store) + totalWays(n-2,store);
    return store[n];

}
function climbStairs(n: number): number {
    let store = new Array(n).fill(null);
    return totalWays(n,store);
    
};