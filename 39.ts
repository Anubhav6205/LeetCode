function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    let st = new Set<string>();
    findComb(candidates, target, st, 0, []);
    console.log(st);
    // return [...st].map((a)=>JSON.parse(a));
    return Array.from(st).map((a)=>JSON.parse(a));
};


function findComb(candidates: number[], target: number, st: Set<string>, idx: number, currComb: number[]) {
    if (target <= 0) {
        if (target === 0) st.add(JSON.stringify(currComb));
        return;
    }
    if(target>=candidates[idx])
    {
    let newComb = [...currComb,candidates[idx]];
    findComb(candidates,target-candidates[idx],st,idx,newComb);
    findComb(candidates,target-candidates[idx],st,idx+1,newComb);
    findComb(candidates,target,st,idx+1,currComb);
    }
}