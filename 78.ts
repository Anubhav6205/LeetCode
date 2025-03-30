
function subsets(nums: number[]): number[][] {
    let res:Array<Array<number>> = [];
    findSS(nums,0,[],res);
    return res;
};

function findSS(nums: number[],idx: number, subset: number[],res: Array<Array<number>>)
{
    if(idx>=nums.length)
    {
        res.push(subset);
        return;
    }
    let newSubset = [...subset,nums[idx]];
    let takeCurrent = findSS(nums,idx+1,newSubset,res);
    let skipCurrent = findSS(nums,idx+1,subset,res);
}