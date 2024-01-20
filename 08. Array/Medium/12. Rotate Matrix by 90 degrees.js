// -----------------------Rotate image by 9 degree -------------------

// Problem statement:  Given a arr, your task is to rotate the arr 90 degrees clockwise.

// Approach : Take another dummy arr n*n and then take the first row of the  arr and put it in the last column of the dummy arr, take the second row of the arr, and put it in the second last column of the arr and so on.

// console.log(tronspose(arr));


// ---------------------------------

function rotate(arr) {
    const n = arr.length;
    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        rotated[i] = new Array(n);

    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = arr[i][j];
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

// time complexity : O(N*N) to lineraly iterate and put it leto some other arr

// space complexity: O(N*N) to copy it leto some other arr

// ------------------------Optimal approach -------------------------------------


// letuition: By observation, we see that the first column of the original arr is the reverse of the first row of the rotated arr, so that’s why we transpose the arr and then reverse each row, and since we are making changes in the arr itself space complexity gets reduced to O(1).

// Approach:

// Step 1: Transpose the arr. (transposing means changing columns to rows and rows to columns)

// Step 2: Reverse each row of the arr.


let arr  = [[1,2,3],[4,5,6],[7,8,9]];

function rotate1(arr){

for(let i = 0 ; i<arr.length; i++){
for(let j = i ; j<arr[0].length; j++){
    [arr[i][j] , arr[j][i]] = [arr[j][i] , arr[i][j]]

}
for(let i = 0 ; i<arr.length; i++){
    for(let j = 0 ; j<Math.floor(arr.length/2); j++){
        [arr[i][j] , arr[i][arr.length-1-j]] = [arr[i][arr.length-1-j] , arr[i][j]]
    }
}
}
return arr;
}

console.log(rotate1(arr));

// time complexity: O(N*N) = O(N^2);

//space complexity =O(1)