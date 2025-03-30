function subarraySum(nums: number[], k: number): number {
    let mp = new Map<number, number>();
    let cnt = 0;
    let preSum = 0;
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i];
        // console.log("pre Sum", preSum);
        let preSumFreq = mp.get(preSum);
        if (preSum === k) {
            cnt++;
        }

        let diffFreq = mp.get(preSum - k);
        // console.log("diff freq", diffFreq);
        if (diffFreq) {
            cnt += diffFreq;
        }


        if (preSumFreq) {
            mp.set(preSum, preSumFreq + 1);
        }
        else {
            mp.set(preSum, 1);
        }
    }
    return cnt;


};