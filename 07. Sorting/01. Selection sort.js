// ----------------- Selection sort algorithm --------------

// Problem statement: - Given an array of N integers, write a program to implement the Selection sorting algorithm

// ----------------Approach:

// 1. First, we will select the range of the unsorted array using a loop that indicates the starting index of the range.
// The loop will run forward from 0 to n-1. The value i - 0 means the range is from 0 to n-1 and similarly i =1 means the range is from 1 to n-1 and so on.

// 2. Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.

//3. After that,we will swap the minimum element with the first element of the selected range.

// 4. Finally, after each iteration, we will find that the array is sorted up to the first index of the range.

function selection_sort(arr) {
  //here numbers are 13,46,30,24,52,9

  // rows starts from 0 i.e 13
  for (i = 0; i <= arr.length - 1; i++) {
    min = i; // i=0

    // it compares 13 with all the numbers . if there is number less than 13. it returns min.
    for (j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j; //  min = 5 ; here j =5
      }
    }

    var temp = arr[min]; //temp = arr[5] (arr[5] = 9);
    arr[min] = arr[i]; // arr[5] = arr[0]  (arr[i] = 13);
    arr[i] = temp; // arr[i] = 9 ;

    //here the small number get at first. and 13 replace at the position where small number index comes
  }
  return arr;
}

console.log(selection_sort([13, 46, 30, 24, 52, 9]));

//  ----------------------------------------------

// TIme complexity : O(N^2) ,(where N = size of the array)

// Reason :- if we carefully observe,we can notice that the outer loop, say i, is runnign from 0 to n-1 times, and for each i, the inner loop j runs from i to n-1 . for i=0, the inner loop runs n-1 times , for i=1 the inner loop runs n-2 times and so on. So, the total steps will be approximately the following : (n-1) + (n-2) +(n-3)+...........+3+2+1. The summation is approximately the sum of the first n natural number i.e (n*n+1)/2. The precise time complexity will be O(n^2/2 + n/2). Previously, we have learned that we can ignore the lower values as well as the constant coefficents. So, the time complexity is O(n^2).

// space complexity : O(1).
