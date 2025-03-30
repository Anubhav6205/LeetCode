function findDuplicates(nums: number[]): number[] {
    //n=5 0
    let st= new Set<number>
    for(let i =0;i<nums.length;i++)
    {
       let currNum = Math.abs(nums[i]);
       if(nums[currNum-1]<0)
       {
           st.add(currNum);
       }
       else
       {
           nums[currNum-1]*=-1;
       }

    }

    return [...st];

};