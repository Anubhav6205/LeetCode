function threeSumClosest(n: number[], t: number): number {
    n.sort((a, b) => a - b);
    let clSum = 1000000;
    for (let i = 0; i < n.length - 2; i++) {
        let a = i + 1, b = n.length - 1;

        while (a < b) {
            let currSum = n[i] + n[a] + n[b];

            if (Math.abs(currSum - t) < Math.abs(clSum - t)) {
                clSum = currSum;
            }
            if (currSum < t) {
                a++;
            }
            else {
                b--;
            }
        }

    }
    return clSum;


};