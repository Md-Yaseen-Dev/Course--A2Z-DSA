   // ----------Left Rotate the array by one

// Problem statement:- Given an array of N integers, left rotate the array by one place.

// Example:1
// Input N=5 array[] = [1,2,3,4,5]

// OUPUT 2,3,4,5,1

// Explianation:
// since all the elements in array will be shifted toward left by one so 2 will now become the first index and "1" which was present at first index will be shifted at last.

// ------------------------Brute force Approach---------------

// intuition:

//  The rotated array has just a difference that its first element is present at the last index of the array. So if we can just store the element at the first index and then shift all the elements towards the left and at last put the stored element at the last index. We willget the rotated array.

// Approach

// We can take another dummy array of the same length and then shift all elements in the array toward the left and then at the last element store the index of 0th index of the array and print it.


function solve(arr,n){
    let temp = new Array(n);

    for(let i =1; i<n; i++){

        temp[i-1] = arr[i];


    }
    temp[n-1]=arr[0];

    for(let i =0; i<n; i++){

        console.log(temp[i]+ " ")
    }
}

let n=5;
let arr = [1,2,3,4,5];
solve(arr,n);


//  Time complexity: O(n), as we iterate through the array only once.

// space complexity :O(n) as we are using another array of size same as the given array.


// --------------------Optimal Approach----------------------


// Here, in the given array:

// n= 5;
// arr[] =[1,2,3,4,5]


//  At the first, we have to shift the array towards the left so, we store the value of the first index in a variable (let it be x).

//  then we iterate the array from the Oth index to the n-1th index (why n-1) i will explian it below)

// And then store the value present in the inext index to the current index like this
// arr[i] = arr[i+1];

//  And to prenvent its segmentation fault we will iterate it till n-1

//  at last, put  the value of variable x in the last index of the array.


function solve1(arr,n){

    let temp = arr[0]; // starting the fist element of the array

    for(let i = 0 ; i< n-1; i++){

        arr[i] = arr[i+1];


    }
    arr[n-1] = temp; // assign the value of the variable at the last index.

    for(let i =0 ; i<n; i++){
        console.log(arr[i] + " ");
    }
}


let arr1 =[3,4,5,6,7,8]
solve1(arr1, arr1.length)


// Time complexity:- O(n) as we iterate through the array only once.

// Space complexity: (1) as no extra space is used.