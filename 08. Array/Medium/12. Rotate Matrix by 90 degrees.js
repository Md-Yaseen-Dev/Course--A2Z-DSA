// -----------------------Rotate image by 9 degree -------------------

// Problem statement:  Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Approach : Take another dummy matrix n*n and then take the first row of the  matrix and put it in the last column of the dummy matrix, take the second row of the matrix, and put it in the second last column of the matrix and so on.

// let arr = [
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// function tronspose(arr) {
//     let n = arr.length;
//     console.log(n)
//   let temp= []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {

// temp[i][j] = arr[j][i]
//     }
//   }
//   return temp;
// }

// console.log(tronspose(arr));


// ---------------------------------

function rotate(matrix) {
    const n = matrix.length;
    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        rotated[i] = new Array(n);

    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }

    return rotated;
}

const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotated = rotate(arr1);
console.log("Rotated Image");

console.log(rotated)


