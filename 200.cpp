class Solution {
public:

    // left, up, right, down
    int row[4] = {0, -1, 0, 1};
    int col[4] = {-1, 0, 1, 0};

    void usingBFS(int srcRow, int srcCol, vector<vector<bool>>&visited, int &m, int &n, vector<vector<char>>& grid) {

        queue<pair<int, int>> q;

        // init.
        q.push({srcRow, srcCol});
        // mark the visited and parent
        visited[srcRow][srcCol] = true;

        while (!q.empty()) {
            
            // access front
            auto front = q.front();
            q.pop();
            int frontRow = front.first;
            int frontCol = front.second;

            // only 4 nbr in range - horizontal and vertical && not visited && valid = 1
            // left, up, right, down
            for (int i = 0; i<4; i++) {
                int newRow = frontRow + row[i];
                int newCol = frontCol + col[i];

                // in range
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                    // not visited and val = '1'
                    if (!visited[newRow][newCol] && grid[newRow][newCol] == '1') {
                        q.push({newRow, newCol});
                        // mark visited
                        visited[newRow][newCol] = true;
                    }
                }
            }
        }
    }

    void usingDFS(int srcRow, int srcCol, vector<vector<bool>>&visited, int &m, int &n, vector<vector<char>>& grid) {
        // mark visited
        visited[srcRow][srcCol] = true;

        // only 4 nbr in range - horizontal and vertical && not visited && valid = 1
        // left, up, right, down
        for (int i = 0; i<4; i++) {
            int newRow = srcRow + row[i];
            int newCol = srcCol + col[i];

            // in range
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                // not visited and val = '1'
                if (!visited[newRow][newCol] && grid[newRow][newCol] == '1') {
                    // call for next node
                    usingDFS(newRow, newCol, visited, m, n, grid);
                }
            }
        }
    }

    int numIslands(vector<vector<char>>& grid) {
        // 2 approaches - using bfs and dfs - TC = O(V+E), SC = O(V)

        int count = 0;

        // unordered_map<pair<int, int>, bool> visited;

        int m = grid.size();
        int n = grid[0].size();

        vector<vector<bool>> visited(m, vector<bool>(n, false));

        for (int row = 0; row<m; row++) {
            for (int col = 0; col<n; col++) {

                if (grid[row][col] == '1') {
                    if (!visited[row][col]) {
                        // usingBFS(row, col, visited, m , n, grid);

                        usingDFS(row, col, visited, m, n, grid);
                        count++;
                    }
                }
            }
        }

        return count;
    }
};