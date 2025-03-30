function intersection(nums1: number[], nums2: number[]): number[] {
    let n1 = new Set<number>(nums1)
    let n2 = new Set<number>();
    nums2.forEach(num=>{
        if(n1.has(num))
        {
            n2.add(num);
        }
    })
    return [...n2];
};

console.log(intersection([1,2,2,1],[2,2]));
