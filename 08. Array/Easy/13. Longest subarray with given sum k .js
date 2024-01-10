// ------------------------Longest subarray with given sum k -----------------------

// Problem statement:  Given an array and a sum k, we need to print the  length of the longest subarray that sums to k.



// ------------------Brute force approach----------------


// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
// Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
// If the sum is equal to k, we will consider its length i.e. (j-i+1). Among all such subarrays, we will consider the maximum length by comparing all the lengths.




// ---Intution--
// We will check the sum of every possible subarray and consider the one with the sum k and the maximum length among them. To get every possible subarray sum, we will be using three nested loops. The first loops(say i and j) will iterate over every possible starting index and ending index of a subarray. Basically, in each iteration, the subarray range will be from index i to index j. Using another loop we will get the sum of the elements of the subarray [i…..j]. Among all the subarrays with sum k, we will consider the one with the maximum length.

// Note: We are selecting every possible subarray using two nested loops and for each of them, we add all its elements using another loop.



function getLongestSubarray(a,k){

    let n = a.length;

    let len = 0; 
    for(let i =0 ; i<n;i++){

        for(let j= i ; j<n; j++){

            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }
        }

        if(s === k){

            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }
        }
    }
    return len
}


let a = [2, 3, 5, 1, 9];
let k = 10;
console.log(getLongestSubarray(a, k));


//  time complexity: o(N^3);
// space complexity :


// -------------------------- optimal approach  ------------





function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a1 = [2, 3, 5, 1, 9];
let k1= 10;
let len = getLongestSubarray(a1, k1);
console.log("The length of the longest subarray is:", len);



