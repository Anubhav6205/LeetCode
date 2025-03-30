function permute(nums: number[]): number[][] {
    let ans: number[][]=[];
  
    function findAllPerm(current: number[], remaining: number[])
    {
        if(remaining.length === 0)
        {
            ans.push([...current]);
            return;
        }
        for(let i = 0;i<remaining.length;i++)
        {
            const nextNumber = remaining[i];
            const newRemaining = remaining.slice(0,i).concat(remaining.slice(i+1));
            findAllPerm([...current,nextNumber],newRemaining)
        }
       

    }
    findAllPerm([],nums);

    return ans;
    
};