function sortedSquares(nums: number[]): number[] {
    return nums.sort((a,b)=>a*a - b*b).map((num)=>num*num);
};