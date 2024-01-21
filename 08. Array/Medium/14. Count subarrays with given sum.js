// --------------Count subarray sum equals k ---------------------

// Problem statment : Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.


/**
 
Algorithm / Intuition
The steps are as follows:

First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
After calculating the sum, we will check if the sum is equal to the given k. If it is, we will increase the value of the count.
 */

/*
Intuition: We will check the sum of every possible subarray and count how many of them are equal to k. To get every possible subarray sum, we will be using three nested loops. The first two loops(say i and j) will iterate over every possible starting index and ending index of a subarray. Basically, in each iteration, the subarray range will be from index i to index j. Using another loop we will get the sum of the elements of the subarray [i…..j]. Among all values of the sum calculated, we will only consider those that are equal to k.

Note: We are selecting every possible subarray using two nested loops and for each of them, we add all its elements using another loop.

Note: For a better understanding of intuition, please watch the video at the bottom of the page.


*/

function findAllsubarraywithGivensum( arr,l){
let n = arr.length;
let count = 0;

for(let i = 0 ; i<n; i++){
    for(let j =i ; j<n; j++){

        let sum = 0;

        for(let k = i; k<=j; k++){
            sum+= arr[k];
        }

        if(sum == l){

            count++
        }
    
    }
}
return count;
}

console.log(findAllsubarraywithGivensum([3,1,2,4],6));


// Time Complexity: O(N3), where N = size of the array.
// Reason: We are using three nested loops here. Though all are not running for exactly N times, the time complexity will be approximately O(N3).

// space complexity : O(1) as we are not using any extra space.


// ----------------------Optimal approach -----------------------------------


function findAllsubarray(arr,l){

    let n = arr.length;
    let map = {};
    let presum = 0;
    let count = 0;

    map[0] =1;
    for(let i=0; i<n;i++){

        presum += arr[i]
    
//  calculate x-l

let remove = presum- l;

// Add the no of subarrays to be removed.

count += map[remove] || 0;

// update the count of prefix sum
//  in the map

map[presum] = (map[presum]||0)+1;
}
return count;

}

console.log(findAllsubarray([1,3,2,4,2],6))