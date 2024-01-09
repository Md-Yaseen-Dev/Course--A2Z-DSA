// -------------------Insertion method -------------------


// Approach:

//1. Select an element in each iteration from the unsorted array(using a loop).
// 2. Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
// 3.The “inner while loop” basically shifts the elements using swapping.
function insertion_sort(arr) {


  for (i = 0; i <= arr.length; i++) {

    // from first index and second index they compare , if first value is larger and second value is smaller. they do swapping 

    // in index is three they check second index decrease 1 and check first index. and so on to the arr.length.

    j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {   // 2 > 0 && arr[1] > arr[2]  (18 > 12)

        let temp = arr[j-1];

        arr[j-1] = arr[j];

        arr[j] =  temp;

        j--
    }
  }
  return arr;
}

console.log(insertion_sort([14, 18, 12, 6, 8, 13]));

//  TIme complexity : O(N^2)
//  space complexity : O(1)