function majorityElement(nums: number[]): number {
    let cnt=1,num=nums[0];
    for(let i=1;i<nums.length;i++)
    {
        if(num===nums[i])
        {
            cnt++;
        }
        else
        {
            cnt--;
            if(cnt===0)
            {
                num=nums[i];
                cnt=1;
            }
        }
    }
    return num;
    
};