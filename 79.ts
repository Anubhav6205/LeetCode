function exist(board: string[][], word: string): boolean {
    if (!word || word === '') return true; // if the word is empty, return true
    let visited = Array.from({length:board.length},()=>new Array(board[0].length).fill(false));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (findWord(0, i, j)) {
                    return true; // return true immediately if found
                }
            }
        }
    }

    function findWord(index: number, row: number, col: number): boolean {
        // Check if out of bounds or character doesn't match or already visited
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col] || word[index] !== board[row][col]) {
            return false;
        }
        
        // If we reached the end of the word
        if (index === word.length - 1) {
            return true; // found the word
        }

        // Mark this cell as visited
        visited[row][col] = true;

        // Explore all possible directions
        const found = findWord(index + 1, row - 1, col) || // up
                      findWord(index + 1, row + 1, col) || // down
                      findWord(index + 1, row, col - 1) || // left
                      findWord(index + 1, row, col + 1);   // right

        //Unmarking after this node is traversed
        visited[row][col] = false;


        return found; // return if the word was found
    }

    return false; // if no paths matched the word
}