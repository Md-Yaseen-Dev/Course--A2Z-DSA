// -----------------Rotate array by k elements--------------------------------------

// Rotate Array by k elements

// Problem statement:- Given an array of integers, rotating array of elements by k elemtns either left or right.


// Examples

// Example:1

// Input : N:7 array []  = {1,2,3,4,5,6,7} , k =2 , right

// output: 6 ,7,1,2,3,4,5

// Explanation: array is rotated to right by 2 position.


function solve(arr, k){

let newarr = []
    for(let i = 0 ; i < arr.length; i++){

        if(i<k){
        newarr.push(arr[arr.length-k+i])
        }
        else{

            newarr.push(arr[i-k])
        }

}
return newarr;
}
console.log(solve([1,2,3,4,5,6,7], 2));


