function maxProfit(prices: number[]): number {
    let profit =0;
    let minStk = Number.MAX_SAFE_INTEGER;
    for(const currStk of prices)
    {
        if(minStk<currStk)
        {
            profit += currStk-minStk;
            minStk=currStk;
        }
        else
        {
            minStk=Math.min(minStk,currStk);
        }
    }
    return profit;
    
};