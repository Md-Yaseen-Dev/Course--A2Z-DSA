// ---------------------Linear Search ___________________


// Problem statement :- Given an array , and an element num the task is to find if num is present in the given array or not. if present print the index of the element or print -1

// examples

// Input : arr[] = 1 2 3 4 5 num = 3 

// ouput  2

// Explanation :- 3 is present in the 2nd index.



// Approach


//   -> Given an array

//   -> We will traverse the whole array and see if the   element if present in the array or not.

//   -> If found we will print the index of the element.

//   -> otherwise, we will print -1.


// -----------------------------------------


function search(arr, n, num){

for(let i = 0 ; i< n ;i++){
    if(arr[i] == num){
        return i ;
    }
}
return -1;
}

let arr = [1,2,3,4,5,6];
console.log(search(arr, arr.length , 6));


// Time Complexity: O(n), where n is the length of the array.

// Space Complexity: O(1)