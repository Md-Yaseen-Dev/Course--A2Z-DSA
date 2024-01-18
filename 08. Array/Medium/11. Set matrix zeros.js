// ----------------------Set Matrix Zero -----------------------------------


// Problem statement :  Given a matirx if an elment in the matirx is 0 then you will have to set its entire column and row to 0 and return the matrix.

// Algorithm / Intuition
// Approach:
// The steps are the following:

// First, we will use two loops(nested loops) to traverse all the cells of the matrix.
// If any cell (i,j) contains the value 0, we will mark all cells in row i and column j with -1 except those which contain 0.
// We will perform step 2 for every cell containing 0.
// Finally, we will mark all the cells containing -1 with 0.
// Thus the given matrix will be modified according to the question.
// Note: Here, we are assuming that the matrix does not contain any negative numbers. But if it contains negatives, we need to find some other ways to mark the cells instead of marking them with -1.

// Intuition:

// This approach is very straightforward and we are just following the process stated in the question. But the following two questions need to be clarified to understand the algorithm further.

// Why we are marking the cells with -1 and not with 0 directly:
// Let’s try to understand this using the following example and in that example, we will try to mark the cells directly with 0.
// Given matrix:


// First, we will find 0 at cell (1,1) (0-based indexing). For the cell, we will mark all the cells(except those that contain 0) of row 1 and column 1 with 0. So, the matrix, in this case, will look like the following:


// Now, we will again find 0 at cell (1, 2). But this cell was initially 1, not 0. And only those cells which were initially 0 should modify the rows and columns. In this case, we will eventually mark the wrong rows and columns with 0. That is why we cannot mark the cells directly with 0. We have to choose a different number.
// As in this case, we are assuming that the matrix does not contain any negative numbers, we are choosing -1 as our marker.

// While marking the cells with -1, why we are not marking the cells that contain 0:
// Again, let’s try to understand this using the following example and in that example, we will try to mark all the cells with -1.
// Given matrix:


// First, we will find 0 at cell (1,1) (0-based indexing). For the cell, we will mark all the cells of row 1 and column 1 with -1. So, the matrix, in this case, will look like the following:


// Now, we will not be able to find the value 0 that should be in the cell (1,3). And our algorithm will not modify column 3. That is why we cannot modify the cells with value 0 while marking the cells -1 as those cells with 0 will contribute to the answer.

// Note: For a better understanding of intuition, please watch the video at the bottom of the page.


const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  
  const n = matrix.length;
  const m = matrix[0].length;

  function markRow(matrix, n, m, i) {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function markCol(matrix, n, m, j) {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
function zeroMatrix(matrix,n,m){
for(let i =0; i<n;i++){

    for(let j = 0 ; j<m ;j++){

 if(matrix[i][j] == 0){
markRow(matrix,n,m,i);
markCol(matrix,n,m,j);

        }
    }
}

// Finally, mark all -1 as 0:
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === -1) {
      matrix[i][j] = 0;
    }
  }
}
return matrix;

}

console.log(zeroMatrix(matrix,n,m));

// Time complexity : O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// space complexity : O(1) as we are not using any extra space.

// -----------------------Optimal approach -----------------------------


function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix1);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    
