// -----------------Implement upper bound ------------------------------


//  Problem statment :  given a sorted aray of n integers and an integer x,write a program to find the upper bound of x.


// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

// The upper bound is the smallest index, ind, where arr[ind] > x.

// But if any such index is not found, the upper bound algorithm returns n i.e. size of the given array. The main difference between the lower and upper bound is in the condition. For the lower bound the condition was arr[ind] >= x and here, in the case of the upper bound, it is arr[ind] > x.

// // Algorithm / Intuition
// Naive approach (Using linear search): 
// Let’s understand how we can find the answer using the linear search algorithm. With the knowledge that the array is sorted, our approach involves traversing the array starting from the beginning. During this traversal, each element will be compared with the target value, x. The index, i, where the condition arr[i] > x is first satisfied, will be the answer.



function upperBound(arr,x,n){


    for(let i= 0 ; i<n ; i++){


        if(arr[i] > x){

            return i
        }
    }

    return n ;
}

let arr = [1,2,3,4,5,5,6,7,11,22];

let x = 7;

let n = arr.length;

console.log(upperBound(arr,x,n));


//  Time complexity : O(N);

//  space complexity :O(1)