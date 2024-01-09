// ----------------------------Find the missing number in an array

// Problem:-  Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

// -----------------------------Brute-force approach--------------------

// Approach:-

// --------The algorithm steps are as follows ---------

/* 
1.  We will run a loop(say i) from 1 to N. 
     
2. For each integer, i, we will try to find it in the given array using linear search. 

    a) For that, we will run another loop to iterate over the array and consider a flag variable to indicate if the element exists in the array. Flag = 1 means the element is present and flag = 0 means the element is missing.
    
    b) Initially, the flag value will be set to 0. While iterating the array, if we find the element, we will set the flag to 1 and break out from the loop.
    Now, for any number i, if we cannot find it, the flag will remain 0 even after iterating the whole array and we will return the number.

*/

// code:-

let a = [1, 2, 4, 5];
let N = 5;
function missingNumber(a, N) {
  for (i = 1; i <= N; i++) {
    let flag = 0;
  
  for (let j = 0; j < N - 1; j++) {
    if (a[j] == i) {
      //  i is present in the array

      flag = 1;
      break;
    }
}
  // check if the element is missing (i.e., flag === 0):
  if (flag === 0) {
    return i;
  }
}
  // The following line will never execute.
  // It is just to avoid warnings.
  return -1;
}

console.log(missingNumber(a, N));


// Time Complexity: O(N2), where N = size of the array+1.
// Reason: In the worst case i.e. if the missing number is N itself, the outer loop will run for N times, and for every single number the inner loop will also run for approximately N times. So, the total time complexity will be O(N2).

// Space Complexity: O(1)  as we are not using any extra space.



// ------------------------------- Optimal approach------------

// Approch : 


// The steps are as follows:

/* 
  1. We will first calculate the summation of first N natural numbers(i.e. 1 to N) using the specified formula.
  2. Then we will add all the array elements using a loop.
  3. Finally, we will consider the difference between the summation of the first N natural numbers and the sum of the array elements.

*/


function missingNumber1(a, N){

    const summation = (N*(N+1))/2 ;
    let sum = 0;
for(let i =0 ;i< N-1; i++){

    sum +=a[i];
}
const missingNum = summation -sum;

return missingNum
}

console.log(missingNumber1(a,N));


// ime Complexity: O(N), where N = size of array+1.
// Reason: Here, we need only 1 loop to get the sum of the array elements. The loop runs for approx. N times. So, the time complexity is O(N).

// Space Complexity: O(1) as we are not using any extra space.



// XOR  operator converts into binary -- if both values are 0 or 1 it returns 0. otherwise returns 1


function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i];    //  0000  + 0001

      xor1 = xor1 ^ (i + 1);   // 1) 0000  + 0001   2) -> 0001 + 0010  3)-> 0011 + 0011  -4)> 0000 + 0100
      // XOR up to [1...N-1]
      console.log("xo1 " + xor1);// XOR of array elements

    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }
  
  function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
  main();
  
  