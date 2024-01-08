// ------------------------Bubble sort-------------------------------------------------

// Problem statement: Given an array of N integers, write a program to implement the bubble sorting algorithm.

// approach:


//  The algorithm steps are as follows:

// 1. First, we will select the range of the unsorted array. For that,we will run a loop (say i ) that will signify the last index of the selected range. The loop will run backward from index n-1 to 0 (where n = size of the array). The value i = n-1 means the range is from 0 to n-1. and similarly i = n-2 means the range is from 0 to n-2 and so on.

// 2. Within the loop, we will run another loop(say j, runs from 0 to i-1 though the range is from 0 to i) to push the maximum element to the last index of the selected range, by repeatedly swapping adjacent elements.
// Basically, we will swap adjacent elements(if arr[j] > arr[j+1]) until the maximum element of the range reaches the end.

// 3. Thus, after each iteration, the last part of the array will become sorted. like:after the first iteration, the array up to the last index will be sorted and after the second iteration, the array up to the second last index will be sorted, and so on.

//4. After (n-1) iteration, the whole array will be sorted.

function bubble_sort(arr){

    // bubble sort compare with first value to second value , i.e  13 >46 then  46 >30 from first to end. 
// again same process until the first value get the least value.

    for(i=arr.length-1; i >=1; i--){    
        for(j=0; j<= i-1; j++){

            if(arr[j]>arr[j+1]){
    
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;
            }

        }
    }
    return arr ; 
    }
    
    console.log(bubble_sort([13,46,30,24,52,9]));

// Time complexity: O(N^2)
    // Space Complexity: O(1)
function bubbley(arr){
    
    for(i=0 ; i <=arr.length; i++){    
        for(j=0; j<= arr.length-1; j++){

            if(arr[j]>arr[j+1]){
    
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;
            }

        }
    }
    return arr ; 
    }

    console.log(bubbley([5,7,9,2,3,1,16]))


    // Time Complexity: O(N) ;
    // Space Complexity: O(1);