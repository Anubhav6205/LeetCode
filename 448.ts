function findDisappearedNumbers(nums: number[]): number[] {
    let ans = [];
    for(let i=0;i<nums.length;i++)
    {
        let currNum = Math.abs(nums[i]);
        if(nums[currNum-1]>0)
        {
            nums[currNum-1]*=-1;
        }
    }
    for(let i =0;i<nums.length;i++)
    {
        if(nums[i]>0)
        {
            ans.push(i+1);
        }
    }

    return ans;
    
};