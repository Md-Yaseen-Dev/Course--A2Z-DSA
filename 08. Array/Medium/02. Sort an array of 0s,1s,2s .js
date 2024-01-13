//  ------------------Sort an array of Os,1s and 2s -----------------------------------

// Problem statement : Given an array consisting of only 0s,1s and 2s. write a program to in-place sort the array without using inbult sort functions (Excepted single pass-O(N) and constant space)


// Input nums = [2,0,2,1,1,0]
// output : [0,0,1,1,2,1]



//----------------------  Brue force approach  ----------------------


//  By using sorting the array would arrange the elements in increasing order

let arr = [2,0,2,1,1,0]
function sort_of_an_arrray(arr){


return arr.sort((a,b)=> a - b)
}

console.log(sort_of_an_arrray(arr));


//  TIme complexity : - O(N*logN);

// space complexity : O(1);

