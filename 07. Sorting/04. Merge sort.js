// // -----------------------merge---------------

// //  1. I will give the array and I'm stating you that the first half is from low to mid and then you can go from mid plus one to high so i'm giving you all three parameters required.

// //                merge(arr, low, mid , high);

// // 2. i will just keep an empty data structure it can be  arr[]

// // 3. we can say that the left array will be from low to mid  and the right array will be  mid plus 1 to high .

// // 4. while(left <=mid && right <= high)

// //5. if (arr[left ] < arr[right]) so what happens this and this gets compared and if one is smallet than 2 , i will take one and i will add it to our resultant guy i will add it to our resulting guy.


// // temp.add(arr[left]) and once you have done this can you move ahead the pointer which means the left pointer goes to the next. i.e left++

// // temp.add(arr[right]) and head right++  keep on comparing and he will keep on adding till this is not compeleted.

// // after the end if there is anyone on the left which means

// // while(left <= mid)  and temp.add (arr[left]) and ahead increment i.e left++.

// // while (right <= high) and temp.add(arr[right]) and ahead increment i.e right++;


// // for i = low to high  =>  arr[i] = temp [i - low]



function merge(arr,low,mid,high){

    let temp = []
    let left = low;
    let right = mid+1;
    while(left <= mid && right <= high){
        if(arr[left] < arr[right]){
        temp.push(arr[left]);
        left++
        }
        else{

            temp.push(arr[right]);
            right++;
        }
    }

    while(left<=mid){

        temp.push(arr[left]);
        left++;
    }

    while(right <= high){

        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i<=high; i++){
       arr[i] = temp[ i - low];
    }
} 


function ms(arr,low,high){
    if(low >= high)return ;
    let  mid  = Math.floor((low + high)/2 );
    ms(arr,low,mid)
    ms(arr, mid+1, high);
    merge(arr,low,mid,high);
}

function merge_sort(arr){

    let n = arr.length
    ms(arr, 0 ,n-1);

    return arr
    } 

console.log(merge_sort([5,6,7,8,2,3,1]))



// --------merge sort---------------


// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr; // Base case: if the array has 1 or 0 elements, it's already sorted
//     }
  
//     const middle = Math.floor(arr.length / 2); // Find the middle of the array
//     const left = arr.slice(0, middle); // Split the array into two halves
//     const right = arr.slice(middle);
  
//     // Recursively sort both halves
//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);
  
//     // Merge the sorted halves
//     return merge(sortedLeft, sortedRight);
//   }
  
//   function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
  
//     // Compare elements from left and right arrays and merge them in sorted order
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] <= right[rightIndex]) {
//         result.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }
  
//     // Add any remaining elements from left and right arrays
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
//   }
  
//   // Example usage:
//   const array = [5, 3, 8, 2, 1, 4, 7, 6];
//   const sortedArray = mergeSort(array);
//   console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  