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