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


