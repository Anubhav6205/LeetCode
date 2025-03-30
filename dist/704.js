function search(nums, target) {
    return BS(0, nums.length - 1, target, nums);
}
function BS(lb, ub, target, nums) {
    if (lb >= ub)
        return nums[lb] === target ? lb : -1;
    let mid = Math.ceil((ub + lb) / 2);
    if (nums[mid] === target)
        return mid;
    return nums[mid] > target
        ? BS(lb, mid - 1, target, nums)
        : BS(mid + 1, ub, target, nums);
}
//# sourceMappingURL=704.js.map