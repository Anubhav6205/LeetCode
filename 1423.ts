function maxScore(cardPoints: number[], k: number): number {
    let maxSum = 0;
    //Find first K sum
    for (let i = 0; i < k; i++) {
        maxSum += cardPoints[i];
    }

    let currSum = 0;
    for (let i = cardPoints.length - k; i < cardPoints.length; i++) {
        currSum += cardPoints[i];
    }
    maxSum = Math.max(maxSum, currSum);



    for (let i = cardPoints.length - k + 1; i < cardPoints.length; i++) {
        let prevIdx = i - 1;
        let nextIdx = i + k - 1 < cardPoints.length ? i + k - 1 : ((i + k) % cardPoints.length) - 1;
        currSum -= cardPoints[prevIdx];
        currSum += cardPoints[nextIdx];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};