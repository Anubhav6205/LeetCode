function spiralOrder(matrix: number[][]): number[] {
    let ans: number[] = [];
    let rs = 0, re = matrix.length - 1;
    let cs = 0, ce = matrix[0].length - 1;

    while (rs <= re && cs <= ce) {
        // Left to Right
        for (let i = cs; i <= ce; i++) {
            ans.push(matrix[rs][i]);
        }
        rs++; // Move row start down

        // Top to Bottom
        for (let i = rs; i <= re; i++) {
            ans.push(matrix[i][ce]);
        }
        ce--; // Move column end left

        // Right to Left
        if (rs <= re) { // Check if row range is still valid
            for (let i = ce; i >= cs; i--) {
                ans.push(matrix[re][i]);
            }
            re--; // Move row end up
        }

        // Bottom to Top
        if (cs <= ce) { // Check if column range is still valid
            for (let i = re; i >= rs; i--) {
                ans.push(matrix[i][cs]);
            }
            cs++; // Move column start right
        }
    }

    return ans;
}
