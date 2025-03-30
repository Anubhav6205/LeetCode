/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let manageFirstRowCol = Number.MAX_SAFE_INTEGER;
  if (matrix[0][0] === 0) {
    manageFirstRowCol = 0;
  }
  if (manageFirstRowCol !== 0) {
    let firstRowZero = false,
      firstColZero = false;
    for (let i = 1; i < matrix[0].length; i++) {
      if (matrix[0][i] === 0) {
        firstRowZero = true;
      }
    }
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][0] === 0) {
        firstColZero = true;
      }
    }
    if (firstRowZero && firstColZero) {
      manageFirstRowCol = 0;
    } else if (firstRowZero) {
      manageFirstRowCol = 1;
    } else if (firstColZero) {
      manageFirstRowCol = -1;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      makeColZero(i);
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      makeRowZero(i);
    }
  }

  if (manageFirstRowCol === 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }

    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  } else if (manageFirstRowCol === -1) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  } else if (manageFirstRowCol === 1) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  function makeColZero(col: number) {
    for (let i = 1; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  function makeRowZero(row: number) {
    for (let i = 1; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }
}
