function intersection(nums1, nums2) {
    let n1 = new Set(nums1);
    let n2 = new Set();
    nums2.forEach(num => {
        if (n1.has(num)) {
            n2.add(num);
        }
    });
    return [...n2];
}
;
console.log(intersection([1, 2, 2, 1], [2, 2]));
//# sourceMappingURL=349.js.map