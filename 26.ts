function removeDuplicates(nums: number[]): number {
    let unq = new Set<number>();
    for(let i =0;i<nums.length;i++)
    {
        if(unq.has(nums[i]))
        {
            let x = findUnq(i,nums,unq);
            console.log("X is ", x);
            if(x === Number.MAX_SAFE_INTEGER) return unq.size;
            nums[i] = x;
            console.log(nums);
        }
        unq.add(nums[i]);

    }


    
    
    return unq.size;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

function findUnq(idx: number, nums: number[], unq: Set<number>) : number
{
    for(let i = idx;i<nums.length;i++)
    {
        if(!unq.has(nums[i])) return nums[i];
    }
    return Number.MAX_SAFE_INTEGER;

}


//Optimised 

// function removeDuplicates(nums: number[]): number {
//     let k = 1;
//     for(let i = 0 ;i< nums.length - 1 ;i++)
//     {
//         if(nums[i]!==nums[i+1])
//         {
//             nums[k] = nums[i+1];
//             k++;
//         }
//     }
//     return k;
// };