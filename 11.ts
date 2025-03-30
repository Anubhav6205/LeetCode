function maxArea(height: number[]): number {
    let left = 0, right = height.length-1;
    let maxi = 0;
    while (left < right) {
        let minBoundry = Math.min(height[left], height[right]);
        let distance = right - left;
        maxi = Math.max(maxi, minBoundry * distance);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxi;
};