function search(nums: number[], target: number): number {
    return BS(0, nums.length - 1, target, nums);
  }
  
  function BS(lb: number, ub: number, target: number, nums: number[]): number {
    if (lb >= ub) return nums[lb] === target ? lb :-1;
    let mid = Math.ceil((ub + lb) / 2);
    if(nums[mid] === target) return mid;
    return  nums[mid] > target
      ? BS(lb, mid - 1, target, nums)
      : BS(mid + 1, ub, target, nums);
  }
  