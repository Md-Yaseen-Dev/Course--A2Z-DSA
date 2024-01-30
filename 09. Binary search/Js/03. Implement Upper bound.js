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


// --------------------------------optimal approach---------------------------

// Optimal Approach (Using Binary Search): 
// As the array is sorted, we will apply the Binary Search algorithm to find the index. The steps are as follows:

// We will declare the 2 pointers and an ‘ans’ variable initialized to n i.e. the size of the array(as If we don’t find any index, we will return n).

// Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index and high will point to the last index.
// Calculate the ‘mid’: Now, we will calculate the value of mid using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Compare arr[mid] with x: With comparing arr[mid] to x, we can observe 2 different cases:
// Case 1 – If arr[mid] > x: This condition means that the index mid may be an answer. So, we will update the ‘ans’ variable with mid and search in the left half if there is any smaller index that satisfies the same condition. Here, we are eliminating the right half.
// Case 2 – If arr[mid] <= x: In this case, mid cannot be our answer and we need to find some bigger element. So, we will eliminate the left half and search in the right half for the answer.


function upperbound1(arr,x,n){

    let low = 0 , high = n-1;

    let ans = n;


    while(low<=high){

        let mid = Math.floor((low+high)/2);


        if(arr[mid]>x){

            ans = mid;

            high = mid-1
        }
        else{

            low = mid+1
        }
    }

return ans
}
let arr1 = [1,2,3,4,5,6,7,7,8,8,8,9,10,11,12,13];
let x2 = 10;
console.log(upperbound1(arr1,x2,arr1.length))