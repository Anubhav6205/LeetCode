function longestConsecutive(nums: number[]): number {
    let st = new Set<number>(nums);
    let maxi = Number.MIN_SAFE_INTEGER;
    st.forEach((el)=>{
        if(st.has(el-1))
        {
            return;
        }
        let count = 0;
        let itr=el;
        while(st.has(itr))
        {
            itr+=1;
            count+=1;
        }
        maxi=Math.max(count,maxi);
    })
    return maxi;
    


};
console.log(longestConsecutive([100,1,200,3,2,4,7]))