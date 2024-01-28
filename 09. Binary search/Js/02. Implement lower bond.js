    //  Problem statment : given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

//     What is Lower Bound?
// The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

// The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.


// --------------Brutual approach ----------------------


// Algorithm / Intuition
// Naive approach (Using linear search): 

// Let’s understand how we can find the answer using the linear search algorithm. With the knowledge that the array is sorted, our approach involves traversing the array starting from the beginning. During this traversal, each element will be compared with the target value, x. The index, i, where the condition arr[i] >= x is first satisfied, will be the answer.

function lowerbound(arr, target){

    for( i=0 ;i<arr.length; i++){

        if(arr[i] == target){
            return i
        }
    }

    return arr.length
}

let arr = [1,2,5,7,8,10,11]

console.log(lowerbound(arr, 8));



// Time Complexity: O(N), where N = size of the given array.
// Reason: In the worst case, we have to travel the whole array. This is basically the time complexity of the linear search algorithm.

// Space Complexity: O(1) as we are using no extra space.


// --------------Optimal approach(using binary search):-------------

/*
As the array is sorted, we will apply the Binary Search algorithm to find the index. The steps are as follows:

We will declare the 2 pointers and an ‘ans’ variable initialized to n i.e. the size of the array(as If we don’t find any index, we will return n).

Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index, and high will point to the last index.
Calculate the ‘mid’: Now, we will calculate the value of mid using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Compare arr[mid] with x: With comparing arr[mid] to x, we can observe 2 different cases:
Case 1 – If arr[mid] >= x: This condition means that the index mid may be an answer. So, we will update the ‘ans’ variable with mid and search in the left half if there is any smaller index that satisfies the same condition. Here, we are eliminating the right half.
Case 2 – If arr[mid] < x: In this case, mid cannot be our answer and we need to find some bigger element. So, we will eliminate the left half and search in the right half for the answer.
The above process will continue until the pointer low crosses high.

*/


function lowerbound1(arr, target){

let n = arr.length;

let low = 0;
let high = n-1;

while(low < high){

    let mid = Math.floor((low+high)/2);

    if(arr[mid] >= target){

        n = mid;

        high = mid-1
    }
    else{

        low = mid+1;
    }
}
return n;
}

console.log(lowerbound1(arr, 4))