// ------------------Rearrange array element by sign -----------------------

const arr = [1,-4,2,-5];


// --------------------Brtual Approach ----------------------------------

// Define a function to rearrange an array of integers by sign.
function RearrangebySign(A, n) {

    // Define 2 arrays, one for storing positive 
    // and other for negative elements of the array.
    let pos = [];
    let neg = [];
  
    // Segregate the array into positives and negatives.
    for (let i = 0; i < n; i++) {
  
      if (A[i] > 0) {
        pos.push(A[i]);
      } else {
        neg.push(A[i]);
      }
    }
  
    // Positives on even indices, negatives on odd.
    for (let i = 0; i < n / 2; i++) {
      A[2 * i] = pos[i];
      A[2 * i + 1] = neg[i];
    }
  
    return A;
  }

  console.log(RearrangebySign(arr));
// // Time Complexity: O(N+N/2) { O(N) for traversing the array once for segregating positives and negatives and another O(N/2) for adding those elements alternatively to the array, where N = size of the array A}.

// Space Complexity:  O(N/2 + N/2) = O(N) { N/2 space required for each of the positive and negative element arrays, where N = size of the array A}.-------------------------------------Optimal approach -------------------------------------------
// Approach:

// In this optimal approach, we will try to solve the problem in a single pass and try to arrange the array elements in the correct order in that pass only.
// We know that the resultant array must start from a positive element so we initialize the positive index as 0 and negative index as 1 and start traversing the array such that whenever we see the first positive element, it occupies the space at 0 and then posIndex increases by 2 (alternate places).
// Similarly, when we encounter the first negative element, it occupies the position at index 1, and then each time we find a negative number, we put it on the negIndex and it increments by 2.
// When both the negIndex and posIndex exceed the size of the array, we see that the whole array is now rearranged alternatively according to the sign.

function reArrange(arr){
let n = arr.length;
let posIndex = 0 ;
let negIndex = 1 ;
let ans = new Array(n).fill(0);

for(let i =0 ;i<n; i++){


    if(arr[i] <0){
ans[negIndex] = arr[i];
negIndex+= 2

    }

    else{
        ans[posIndex] = arr[i];

        posIndex+= 2

    }
}
return ans ;
}

console.log(reArrange(arr));

// Time Complexity: O(N) { O(N) for traversing the array once and substituting positives and negatives simultaneously using pointers, where N = size of the array A}.

// Space Complexity:  O(N) { Extra Space used to store the rearranged elements separately in an array, where N = size of array A}