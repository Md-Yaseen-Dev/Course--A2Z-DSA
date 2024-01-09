//  Basic of array

//  Array is nothing but a data structures which contains similar elements. It can be integers,string,booleans i.e it contain any kind of data type.

function largest_number(arr){
let largest_num =  arr[0]; 
let secondlargest_num =  -1;
let secondsmallest_num 

for( i = 0 ; i< arr.length; i++){

    if(arr[i] > largest_num){

        secondlargest_num = largest_num ;
        largest_num  = arr[i]
    }
        else if(arr[i] > secondlargest_num && arr[i] != largest_num)

    secondlargest_num = arr[i]

    }
return secondlargest_num
}

console.log(largest_number([5,4,3,21,42,2]));



// -------------Time complexity

//  1. first pass largest  = > o(N) ;
// 2. The algorithm taking two passes n+n  => 0(2n);


// ---------------------------second Largest element in an array---------------------


// --------------Brute force-----------(this approach only works if there are no duplicates)


// Intution:

// what do we do to find the largest or the smallest element present in an array? we ideally sort them and the first element would be the smallest of all while the last element would be the largest. Can we find the second-smallest and second-largest using a similar approach.


// Approach:

//  -> Sort the array in ascending order

//  -> The element present at the second index is the second smallest element.

//  -> The element present at the second index from the end is the second largest element


// code:
const arr = [1,2,4,6,7,5];

function getElements(arr){
if(arr.length == 0 || arr.length === 1){ // edge case when only one element is present in the array.

    return -1
}

arr.sort((a,b)=> a-b);

return arr[arr.length-2];  // second largest
}

console.log(getElements(arr));


// Time complexity:- O(NlogN), for sorting array.

// space complexity: O(1);


// --------------------------Better solution----------


// Intution

// Even though we want to have just the and largest elements, we are still sorting the entire array for that and thus increasing the time complexity. Can we somehow try to not sort the array and still get our answer?


// Approach:


// Find the smallest and largest element in the array in a single traversal
// After this, we once again traverse the array and find an element that is just greater than the smallest element we just found.
// Similarly, we would find the largest element which is just smaller than the largest element we just found
// Indeed, this is our second smallest and second largest element.


// Code:


function getElements1(arr){

    if (arr.length == 0  || arr.length == 1){

        return -1;  // Edge case when only one array value.
    }


    let large = -Infinity;
    let second_large = -Infinity;

    for(let i=0 ; i<arr.length; i++){

        large = Math.max(large, arr[i]);


    }
    for(let  i = 0 ; i<arr.length; i++){

        if(arr[i] > second_large && arr[i] !== large){

            second_large = arr[i]
        }
    }
    return second_large
}

let arr1 = [1,5,6,8,9,10];
console.log(getElements1(arr1));


// TIme complexity : O(N);

// Space complexity : O(1)


// ----------------------Optimal approach(best approach)--------------


// Approach : We would require four variables: small,second_small, large, and second_large. Variable small and second_small are initialized to INT_MAX while large and second_large are initialized to INT_MIN.


// Second largest Algo:- 

// If the current element is larger than ‘large’ then update second_large and large variables
// Else if the current element is larger than ‘second_large’ then we update the variable second_large.
// Once we traverse the entire array, we would find the second largest element in the variable second_large.
// Here’s a quick demonstration of the same.



function secondlargest(arr){

    if(arr.length<2){
        return -1
    }

    let large = -Infinity;
    let second_large = -Infinity;

    for(let i =0; i< arr.length; i++){

        if(arr[i]>large){
            second_large = large;
            large = arr[i]
        }
        else if(arr[i] > second_large && arr[i] !== large){

            second_large = arr[i]
        }
    }
    return second_large;
}


let arr2 = [6,12,18,24,30,36];

console.log(secondlargest(arr2))
