function intersect(nums1, nums2) {
    let mp1 = new Map();
    let ans = [];
    nums1.forEach((num) => {
        mp1.set(num, (mp1.get(num) || 0) + 1);
    });
    nums2.forEach((num) => {
        if ((mp1.get(num) || 0) > 0) {
            ans.push(num);
            mp1.set(num, (mp1.get(num) || 0) - 1);
        }
    });
    return ans;
}
;
console.log(intersect([1, 2, 2, 1], [2, 2]));
//# sourceMappingURL=350.js.map