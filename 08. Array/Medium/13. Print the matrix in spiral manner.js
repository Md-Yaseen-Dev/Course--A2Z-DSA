// ------------Spiral traversal of matrix -------------------------------

// Problem statement:  Given a matrix, print the given matrix in spiral order.

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printSpiral(arr) {
  let arr1 = [];

  let n = arr.length;
  let m = arr[0].length;

  // intalize the pointers required for traversal

  let top = 0;
  left = 0;
  bottom = n - 1;
  right = m - 1;

  // loop until all elements are not traversed

  while (top <= bottom && left <= right) {
    // for moving left to right
    for (let i = left; i <= right; i++) {

        arr1.push(arr[top][i]);
    }
    top++
     // For moving top to bottom.
     for (let i = top; i <= bottom; i++){
     arr1.push(arr[i][right]);
     }
   right--;

   // for moving right to left
   if(top <= bottom){

    for(let i= right; i>=left; i--){
        arr1.push(arr[bottom][i])
    }
    bottom--
   }
   if (left <= right) {
    for (let i = bottom; i >= top; i--)
      arr1.push(arr[i][left]);

    left++;
  }


  }

  return arr1.join(" ");
}
console.log(printSpiral(arr));


/*Time Complexity: O(m x n) { Since all the elements are being traversed once and there are total n x m elements ( m elements in each row and total n rows) so the time complexity will be O(n x m)}.

Space Complexity: O(n) { Extra Space used for storing traversal in the ans array }. */