/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let zero_finder = 0;
    let non_zero_finder = 0;
    while(true)
    {
        while(zero_finder<nums.length&&nums[zero_finder]!==0)
        {
            zero_finder++;
        }
        non_zero_finder = zero_finder + 1;
        while(non_zero_finder<nums.length&&nums[non_zero_finder]===0)
        {
            non_zero_finder++;
        }
        if(zero_finder>=nums.length || non_zero_finder>=nums.length) break;
        [nums[zero_finder],nums[non_zero_finder]] = [nums[non_zero_finder],nums[zero_finder]];
    }
    
};
