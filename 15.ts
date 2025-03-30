function threeSum(n: number[]): number[][] {
    let ans: number[][] = [];
    n.sort((a,b)=>a-b);
    for (let i = 0; i < n.length - 2; i++) {

       
        let a = i + 1;
        let b = n.length - 1;
           
        while (a < b) {
            if (n[i] + n[a] + n[b] > 0) {
                b--;
            }
            else if (n[i] + n[a] + n[b] < 0) {
                a++;
            }
            else {
                ans.push([n[i], n[a], n[b]]);
                a++;
                while(a<b && n[a]===n[a-1])
                {
                    a++;
                }
            }
        }
        while(i<n.length-1 && n[i]===n[i+1])
        {
            i++;
        }
    }
    return ans;
};