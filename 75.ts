/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(n: number[]): void {
    let start= 0,current =0,end=n.length-1;
    while(current<=end)
    {
        if(n[current]===0)
        {
            [n[start],n[current]]=[n[current],n[start]];
            current++;
            start++;
        }
        else if(n[current]===2)
        {
            [n[end],n[current]]=[n[current],n[end]];
            end--;

        }
        else
        {
            current++;
        }
    }
};