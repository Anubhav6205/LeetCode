/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let k = m + n -1;
    m-=1;
    n-=1;
    // if(m === -1) 
    // {
    //     cloneComplete(nums1,nums2);
    //     return;
    // }
    while(n>=0 && k>=0)
    {
        if(nums1[m]>nums2[n])
        {
            nums1[k] = nums1[m];
            m--;
        }
        else
        {
            nums1[k] = nums2[n];
            n--;
        }
        k--;
    }

    while(n-->=0)
    {
        nums1[k] = nums2[n];
        k--;
    }
};

// function cloneComplete(nums1: number[], nums2: number[])
// {
//     let k = nums2.length;
//     while(k-->=0)
//     {
//         nums1[k] = nums2[k];
//     }
// }