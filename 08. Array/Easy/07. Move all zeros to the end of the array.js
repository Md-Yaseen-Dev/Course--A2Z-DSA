//  move all zeros to the end -------------

//  In this article we will learn how to  solve the most asked coding interview problem 
// "Move all zeros to the end of the array."

// Problem statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move and  non negative integers to the front by manintaining their order.


//  Brute force Approach


// The extremly naive solution , we can think involves the use of an extra array. tha algorithm is as follows.

// Algorithm:

//  Suppose, there are N-x Zeros and Z non-zero and X non-zero elements in the array, We will first copy those X non-zero elements form the original array to a temporary array.

// Then , we will copy the elements form the temporary array one by one and fill the first X places of the original array.

//  The last N-X places of the originall array will be then filled with zero.
// Now, our task is completed


function moveZeros(n,a){

    let temp = [];

    for(let i=0; i<n; i++){


        if(a[i] !== 0){


            temp.push(a[i]);
        }
    }


// Number of nonzero elements

let nz = temp.length;

//  copy elements form temp and fill the first nz fields

for(let i= 0; i<nz; i++){

    a[i] = temp[i];
}


// Fill the rest of the cells with 0

for(let i = nz; i< n ; i++){

    a[i]= 0;
}
return a;
}

let arr = [1,0,2,3,2,0,0,4,5,1]
console.log(moveZeros(arr.length, arr));

// -------------TIme complexity------------------------

// O(N) + O(X) + O(N-X) ~ O(2*N)  , 

// --Where N = total no of elements.
//  -- Where X = no of non-zero elements, and N-X = total no of Zeros.

// Reason  : O(N) for copying non-zero elements from the original to the temporary array. O(X) for again copying it back from the temporary to the original array. O(N-X) for filling zeros in th original array. So, the total time complexity willbe O(2*N).



// Space Complexity : O(N), as we are using a temporary array to solve this problem and the maximum size of the array can be N in the worst case.

// Reason :  The temporary array stores the non-zero elements. in the worst case, all the given array elements will be non-zero.



// -----------------------------Optimal Approach------------------------------



// We can optimize the approach using 2 pointers i.e i and j . The pointer j will point to the first 0 in the array and i will point to the next index.

// Assume the given array is  {1,0,2,3,2,0,0,4,5,1} No we intally we will place the 2 pointers like the following.


// Algorithm :


// 1. First, using a loop, we will place the pointer j. if we don't find any O, we will not perform the following steps.

// 2. After that, we will point i to index j+1 and start moving the pointer using a loop.

// 3. while moving the pointer i, we will do the following

//     --> if a[i]!=0 i.e a[i] is non-zero element. We will swap a[i] and a[j]. Now the current j is pointing to the  non-zero element a[i]. So, we will shift the ponter j by 1. so that it acn again pont ot the first zero.


// 4. Finally, our array will be set in the right manner.



function moveZeros1(n,a){
    let j = -1;

 for(let i = 0 ; i<n; i++){
    if(a[i] === 0){
        j = i;
        break;
    }
}
 if ( j === -1) return a ;

// Move the pointers i and j and swap accordingly
 for(let i = j+1; i< n; i++){
    if(a[i] !==0){
        [a[i], a[j]] = [a[j], a[i]];
        j++;}
}
 return a;
}

let arr1 = [1,0,3,4,2,0,0,4,5,1];
console.log(moveZeros1(arr1.length, arr1));

// Time Complexity : O(N) , N = size of the array.

//  Reason:- We have used 2 loops and using those loops, we are basically traversing the array once.

// space complexity : O(1) as we are not using any extra space to solve this problem


