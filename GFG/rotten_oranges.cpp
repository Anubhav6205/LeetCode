class Solution
{
public:
    int orangesRotting(vector<vector<int>> &mat)
    {
        // Code here
        int maxi = -1;
        queue<pair<pair<int, int>, int>> q;
        int n = mat[0].size();
        int m = mat.size();
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (mat[i][j] == 2)
                {
                    q.push({{i, j}, 0});
                }
            }
        }

        while (!q.empty())
        {
            pair<pair<int, int>, int> fnt = q.front();
            q.pop();
            int rotTime = fnt.second;
            maxi = max(maxi, rotTime);

            pair<int, int> idx = fnt.first;
         
            int dr[4] = {-1, 1, 0, 0};
            int dc[4] = {0, 0, -1, 1};

            for (int k = 0; k < 4; k++)
            {
                int ni = idx.first + dr[k];
                int nj = idx.second + dc[k];
                if (ni < 0 || nj < 0 || ni >= m || nj >= n)
                    continue;
                if (mat[ni][nj] != 1)
                    continue;
                q.push({{ni, nj}, rotTime+1});
                mat[ni][nj] = 2;
            }
        }

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (mat[i][j] == 1)
                {
     
                    return -1;
                }
            }
        }

        return maxi == -1 ? 0 : maxi;
    }
};