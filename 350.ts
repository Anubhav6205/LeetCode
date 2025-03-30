function intersect(nums1: number[], nums2: number[]): number[] {
    let mp1 = new Map<number,number>();
    let ans: number[] = [];
    nums1.forEach((num)=>{
        mp1.set(num,(mp1.get(num)||0)+1);
    })

    nums2.forEach((num)=>{
        if((mp1.get(num)||0)>0)
        {
            ans.push(num);
            mp1.set(num,(mp1.get(num)||0)-1);
        }
    })
    return ans;

    
};

console.log(intersect([1,2,2,1],[2,2]));
