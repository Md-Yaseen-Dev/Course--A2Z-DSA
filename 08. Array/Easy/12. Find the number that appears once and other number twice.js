// ------------------Find the number that appears once , and the other number twice -----------------------

// Problem statement :  Given a non empty array of integers arr,every element appears twice except for one. Find that single one.

//  Ex:-1
//  Input format : arr[] = [2,2,1];

// result 1

// explaination:- In this array only the element 1 appear once so it is the answer


// ---------Brute force approach ---------------------


// Intution :-  for every element in the array, we will do a linear search and count the occirremce. if for any element the occuerrence is 1. we will return it.


// Approach :

// ? the steps are as follows

 //  1. First, we will run a loop(say i) to select the elements of the array one by one.

//  2 . First, we will run a loop(say i) to select the elements of the array one by one.

// 3.  If for any element the occurrence is 1, we will return it.


// code:

function getSingleElement(arr){

    const n = arr.length;


    for(let i =0 ; i<n ; i++){

        const num = arr[i];
        let count = 0;

        for(let j = 0 ; j<n; j++){

            if(arr[j]== num){

                count++;
            }
        }

        if (count ==1){
            return num;
        }
    }
    return -1
}
console.log(getSingleElement([4,1,2,1,2]));

//  output : The single element is:4


// Time Complexity: O(N2), where N = size of the given array.
// Reason: For every element, we are performing a linear search to count its occurrence. The linear search takes O(N) time complexity. And there are N elements in the array. So, the total time complexity will be O(N2).

// Space Complexity: O(1) as we are not using any extra space.


// -------------------Better Approach ---------------------------


// Intution :

/* 
In the previous approach, we were finding the occurrence of an element using linear search. We can optimize this using hashing technique. We can simply hash the elements along with their occurrences in the form of (key, value) pair. Thus, we can reduce the cost of finding the occurrence and hence the time complexity.

Now, hashing can be done in two different ways and they are the following:


Array hashing(not applicable if the array contains negatives or very large numbers)
Hashing using the map data structure

*/

// Approach:


// The steps are as follows:

// 1. First we will find the maximum element (say max Element) to know the size of the hash array.
// 2.  we will declare a hash array of size maxElement+1.
// 3.  Now, using another loop we will store the elements of the array along with their frequency in the hash array. (i.e. hash[arr[i]]++)
// 4. After that, using another loop we will iterate over the hash array, and try to find the element for which the frequency is 1, and finally, we will return that particular element.

// : While searching for the answer finally, we can either use a loop from 0 to n(i.e. Size of the array) or use a loop from 0 to maxElement. So, the time complexity will change accordingly.

// Now, using array hashing it is difficult to hash the elements of the array if it contains negative numbers or a very large number. So to avoid these problems, we will be using the map data structure to hash the array elements.

// code




function getSingleElement(arr) {
    // Size of the array:
    let n = arr.length;

    // Find the maximum element:
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }

    // Declare hash array of size maxi+1
    // And hash the given array:
    let hash = new Array(maxi + 1).fill(0)
    console.log(hash)
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // Find the single element and return the answer:
    for (let i = 0; i < n; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

    console.log( getSingleElement([4, 1, 2, 1, 2]))



    //  Time complexity: - O(N)+O(N)+O(N)

    // Space Complexity: O(maxElement+1)



    //  -----------------Best approach : ---------------


//     Intuition:
// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).



// Approach:
// We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.


// Dry run:

// Assume the given array is: [4,1,2,1,2]
// XOR of all elements = 4^1^2^1^2
//       = 4 ^ (1^1) ^ (2^2)
//       = 4 ^ 0 ^ 0 = 4^0 = 4
// Hence, 4 is the single element in the array.



function getSingleElement2(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

console.log(getSingleElement2([5,6,7,87,7,87,6]));


// Time Complexity: O(N), where N = size of the array.
// Reason: We are iterating the array only once.

// Space Complexity: O(1) as we are not using any extra space.