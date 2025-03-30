function findMaxAverage(nums, k) {
    let maxAvg = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    //Calculating first k number's avg
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxAvg = sum / k;
    console.log(maxAvg);
    let ptrA = 0;
    for (let i = k; i < nums.length; i++) {
        sum -= nums[ptrA];
        sum += nums[i];
        maxAvg = Math.max(maxAvg, sum / k);
        console.log(maxAvg);
        ptrA++;
    }
    return maxAvg;
}
;
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
//# sourceMappingURL=643.js.map