function containsDuplicate(nums) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i]))
            return true;
        mp.set(nums[i], 1);
    }
    return false;
}
;
console.log(containsDuplicate([3, 4, 4]));
//# sourceMappingURL=217.js.map