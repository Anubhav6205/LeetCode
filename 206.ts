let pivotIdx=Number.MIN_SAFE_INTEGER;

function search(nums: number[], target: number): number {
     findPivot(0,nums.length-1,nums);
     console.log(pivotIdx);
     let pivotPoint = pivotIdx;
    pivotIdx =Number.MIN_SAFE_INTEGER;

    if(target>nums[pivotPoint] || pivotPoint === 0)
    {
        return binSearch(pivotPoint,nums.length-1,nums,target);
    }
    else
    {
        return binSearch(0,pivotPoint-1,nums,target);
    }
  
};

function binSearch(lb:number, ub:number, nums:number[], target: number)
{
    if(lb>up) return -1;
    let mid = Math.floor((lb+ub)/2);
    if(nums[mid] === target) return mid;
    if(nums[mid]<target) return binSearch(mid+1,ub,nums,target);
    return binSearch(lb,mid-1,nums,target);
}

function findPivot(lb:number,ub:number,nums:number[])
{
    if(ub-lb===1)
    {
        if(nums[ub]<nums[lb]){
            pivotIdx = ub;
        }
        return;
    }
    let mid =Math.floor((ub+lb)/2);
    if(nums[mid]>nums[ub])
    {
        findPivot(mid,ub,nums)
    }
    else if(nums[mid]<nums[lb])
    {
        findPivot(lb,mid,nums);
    }    
}