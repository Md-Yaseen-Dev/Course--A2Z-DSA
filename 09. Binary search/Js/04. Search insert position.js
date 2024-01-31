// ----------------------------Search insert Position -------------------------------

// Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

// If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.


// Solution:
// We will solve this problem using the lower-bound algorithm which is basically a modified version of the classic Binary Search algorithm. 

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// On deep introspection of the given problem, we can easily understand that we have to find the correct position or the existing position of the target number in the given array.

// Now, if the element is not present, we have to find the nearest greater number of the target number. So, basically, we are trying to find an element arr[ind] >= x and hence the lower bound of the target number i.e. x.

// The lower bound algorithm returns the first occurrence of the target number if the number is present and otherwise, it returns the nearest greater element of the target number.

// Approach: 
// The steps are as follows:

// We will declare the 2 pointers and an ‘ans’ variable initialized to n i.e. the size of the array(as If we don’t find any index, we will return n).

// Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index and high will point to the last index.
// Calculate the ‘mid’: Now, we will calculate the value of mid using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Compare arr[mid] with x: With comparing arr[mid] to x, we can observe 2 different cases:
// Case 1 – If arr[mid] >= x: This condition means that the index mid may be an answer. So, we will update the ‘ans’ variable with mid and search in the left half if there is any smaller index that satisfies the same condition. Here, we are eliminating the right half.
// Case 2 – If arr[mid] < x: In this case, mid cannot be our answer and we need to find some bigger element. So, we will eliminate the left half and search in the right half for the answer.


function searchInsert(arr,x){

    let n = arr.length;

    let low = 0 ; high = n-1;

    let ans = n ;


    while(low <= high){

        let mid = Math.floor((low+high)/2);

        //  maybe an answer

        if(arr[mid]>= x){

            ans = mid ;

            //look for smaller index on the left

            high = mid - 1 ;
        }

        else{

            low = mid + 1 ;
        }
    }

    return ans ;
}

let arr  = [1,2,4,5,7];

let x  = 6 ;

let ind = searchInsert(arr,x);

console.log("The indes is : ", ind);


// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.



