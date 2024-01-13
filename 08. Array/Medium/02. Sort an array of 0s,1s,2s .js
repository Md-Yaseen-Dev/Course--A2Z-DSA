//  ------------------Sort an array of Os,1s and 2s -----------------------------------

// Problem statement : Given an array consisting of only 0s,1s and 2s. write a program to in-place sort the array without using inbult sort functions (Excepted single pass-O(N) and constant space)

// Input nums = [2,0,2,1,1,0]
// output : [0,0,1,1,2,1]

//----------------------  Brue force approach  ----------------------

//  By using sorting the array would arrange the elements in increasing order

let arr = [2, 0, 2, 1, 1, 0];
function sort_of_an_arrray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sort_of_an_arrray(arr));

//  TIme complexity : - O(N*logN);

// space complexity : O(1);

//  ---------------------Better Approach --------------------------

// Approach:

// 1.  Take 3 variables to maintain the count of 0, 1 and 2.
// 2. Travel the array once and increment the corresponding counting variables
// ( let’s consider count_0 = a, count_1 = b, count_2 = c )

//3.  In 2nd traversal of array, we will now over write the first ‘a’ indices / positions in array with ’0’, the next ‘b’ with ‘1’ and the remaining ‘c’ with ‘2’.

function sortArray(arr) {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;

  let n = arr.length;

  for (let num of arr) {
    if (num == 0) {
      cnt0++;
    } else if (num == 1) {
      cnt1++;
    } else {
      cnt2++;
    }
  }
  for (let i = 0; i < cnt0; i++) {
    arr[i] = 0;
  }
  for (let i = cnt0; i < cnt0 + cnt1; i++) {
    arr[i] = 1;
  }

  return arr;
}

console.log(sortArray(arr));

//  TIme complexity :O(N) + O(N), where N = size of the array. First O(N) for counting the number of 0’s, 1’s, 2’s, and second O(N) for placing them correctly in the original array.

//------------ Optimal Approach ----------------

// Algorithm / Intuition
// This problem is a variation of the popular Dutch National flag algorithm.

// This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.  The rules are the following:

// arr[0….low-1] contains 0. [Extreme left part]
// arr[low….mid-1] contains 1.
// arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array

// approach :

// The steps will be the following:

// First, we will run a loop that will continue until mid <= high.
// There can be three different values of mid pointer i.e. arr[mid]
// If arr[mid] == 0, we will swap arr[low] and arr[mid] and will increment both low and mid. Now the subarray from index 0 to (low-1) only contains 0.
// If arr[mid] == 1, we will just increment the mid pointer and then the index (mid-1) will point to 1 as it should according to the rules.
// If arr[mid] == 2, we will swap arr[mid] and arr[high] and will decrement high. Now the subarray from index high+1 to (n-1) only contains 2.
// In this step, we will do nothing to the mid-pointer as even after swapping, the subarray from mid to high(after decrementing high) might be unsorted. So, we will check the value of mid again in the next iteration.
// Finally, our array should be sorted.

let arr1 = [1, 0, 2, 1, 0, 0, 1, 0, 2];
function sortedarray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];

      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];

      high--;
    }
  }

  return arr;
}

console.log(sortedarray(arr1));
