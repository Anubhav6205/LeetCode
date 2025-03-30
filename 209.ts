function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Number.MAX_SAFE_INTEGER;
    let left = 0, right = 0;
    let sum = nums[left];
    while (right < nums.length && left <= right) {
        if (sum < target) {
            right++;
            sum += nums[right];
        }
        else {
            minLen = Math.min(minLen, right - left + 1);
            console.log(minLen);
            sum -= nums[left];
            left++;
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};