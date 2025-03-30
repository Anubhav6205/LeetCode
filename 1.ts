function twoSum(nums: number[], target: number): number[] {
  let mp = new Map();
  let i1: number = 0,
    i2: number = 0;
  nums.forEach((num, index) => {
    if (mp.has(target - num)) {
      i1 = index;
      i2 = mp.get(target - num);
    }
    mp.set(num, index);
  });
  return [i1, i2];
}
