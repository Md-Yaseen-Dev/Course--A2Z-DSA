//  Given an array of size n write a program to check if the given array is sorted in ascending/incrasing / Non decrasing order or not. if the array is sorted then return true. else return false.


// Note: two consectibe equal values are considered to be sorted.


// The idea is pretty simple here. we will start with the element at the 0th index, and will comparee it with all of its future elements that are present in the array.

//  if the picked element is smaller than or equal to all of its future values then we will move to the next index/element until the whole array is traversed.

// if any of the picked elements is greater than its future elements, then simply we will return false.

// if the sixe of the array is zero or one i.e (N= 0 0r  n = 1) or the entire array is traversed successfully then we will simply return true.


function isSorted(arr){

    for(let i =0 ; i<arr.length; i++){

        for(let j = i+1; j<arr.length; j++){

            if(arr[j] < arr[i]){

                return false;
            }
        }
        return true
    }
}

const arr = [0,2,4,5,6.7];

const ans = isSorted(arr);

if(ans){
    console.log(true)
}
else{
    console.log(false)
}


//  Time complexity : O ( N^2 )

//  space complexity : O(1)


// ---------------------------Optimal approach(single traversal ------------------


// 1)  As we know that for a sorted array the previous of every element is smaller than or equal to its current element.

//  2) So, through this, we can conclude that if the previous element is smaller than or equal to the current element then. Then we can say that the two elements then. then we can say that two elements are sorted. if the condition is true for the entire array then the array is sorted.

//  we will check every element with its previous element if the previous element is maller than or equl to the current element then we will move to the next index.

//  if the whole array is traversed successfully or the size of the given array is xero or one i.e N = 0 or  N = 1). Then we will return True else return false.


function issorted(arr1){
    for(let i =1 ; i<arr1.length; i++){
    
        if(arr1[i] < arr1[i-1]){
            return false;
        }
    }
    return true;
}

const arr1 = [99,3,4,5,6,7,9];

console.log(issorted(arr1) ? "true": "false");

//  time complexity : O(N)

// space complexity : O(1)