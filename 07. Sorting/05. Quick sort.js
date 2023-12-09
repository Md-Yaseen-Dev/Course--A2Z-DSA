//  -----------------Quick sort------------\\


// Before we start implementing the quick sort algorithm, let's first understand its basic concepts. As we mentioned earlier, quick sort is a divide-and-conquer algorithm. The algorithm can be broken down into three main steps:

// 1. Choose a pivot element from the array.

// 2. Partition the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot.

// 3. Recursively apply the quick sort algorithm to the two subarrays until the entire array is sorted.

const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

  let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(quickSort(myArray)); // Output: [1,2,3,4,5,6,7,8]