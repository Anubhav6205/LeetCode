class Solution {
public:
    void dfs(vector<vector<int>>& image, int sr, int sc, int startColor, int newColor, int n, int m) {
        if (sr < 0 || sr >= n || sc < 0 || sc >= m || image[sr][sc] != startColor) return;
        image[sr][sc] = newColor;
        dfs(image, sr + 1, sc, startColor, newColor, n, m);
        dfs(image, sr - 1, sc, startColor, newColor, n, m);
        dfs(image, sr, sc + 1, startColor, newColor, n, m);
        dfs(image, sr, sc - 1, startColor, newColor, n, m);
    }

    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
        int n = image.size(), m = image[0].size();
        int startColor = image[sr][sc];
        if (startColor != color) dfs(image, sr, sc, startColor, color, n, m);
        return image;
    }
};