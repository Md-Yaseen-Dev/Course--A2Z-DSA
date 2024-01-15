// ------------------Majority elment ...........................

// Problem statment :  Given an array of N integers write a program to return an element that occurs more than N/2 times in the given array. you may consider that such an element  always exists in the array.




let arr = [2,2,1,1,1,2,2];

let n = arr.length;

// ---------------------Brute force approach -----------------

// Approach:

// The steps are as follows:
// 1. We will run a loop that will select the elements of the array one by one.
// 2. Now, for each element, we will run another loop and count its occurrence in the given array.
// 3. If any element occurs more than the floor of (N/2), we will simply return it.





function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}


console.log(majorityElement(arr));


// Time Complexity: O(N^2), where N = size of the given array. Reason: For every element of the array the inner loop runs for N times. And there are N elements in the array. So, the total time complexity is O(N^2). Space Complexity: O(1) as we use no extra space.


// ---------------------------Better Approach ----------------------------


// Use a better data structure to reduce the number of look-up operations and hence the time complexity. Moreover, we have been calculating the count of the same element again and again – so we have to reduce that also.

// Approach: 
// Use a hashmap and store as (key, value) pairs. (Can also use frequency array based on the size of nums) 
// Here the key will be the element of the array and the value will be the number of times it occurs. 
// Traverse the array and update the value of the key. Simultaneously check if the value is greater than the floor of N/2. 
// If yes, return the key 
// Else iterate forward.




function majorityElement1(arr) {
    // Size of the given array
    const n = arr.length;

    // Creating a Map
    const map = new Map();

    // Storing the elements with their occurrences
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    // Searching for the majority element
    for (const [num, count] of map) {
        if (count > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1;
}

const ans = majorityElement1(arr);
console.log("The majority element is:", ans);

// Time Complexity: O(N*logN) + O(N), where N = size of the given array.
// Reason: We are using a map data structure. Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN). The second O(N) is for checking which element occurs more than floor(N/2) times. If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).

// Space Complexity: O(N) as we are using a map data structure




// -----------------------optimal approach ------------------------------

// 1. Initialize 2 variables:
// Count –  for tracking the count of element
// Element – for which element we are counting
// 2. Traverse through the given array.
    // If Count is 0 then store the current element of the array as Element.
   // If the current element and Element are the same increase the Count by 1.
   // If they are different decrease the Count by 1.
// 3. The integer present in Element should be the result we are expecting 


 function majority(arr){

let count = 0;

let el = 0 ;


//  for algorithm
for (let i = 0 ; i<n; i++){


    if(count ===0){

        count++;
        el = arr[i];
    }
    else if(el === arr[i]){

        count++
    }
    else{

        count--

    }
}

//  for majority of number in arr


let count1 = 0;

for(let i = 0; i<n; i++){

    if(el === arr[i]){

        count1++;
    }
}

if(count1 > Math.floor(n/2)){

    return el
}
return -1
 }

 console.log(majority(arr));




 /*
 
 Time Complexity: O(N) + O(N), where N = size of the given array.
Reason: The first O(N) is to calculate the count and find the expected majority element. The second one is to check if the expected element is the majority one or not.

Note: If the question states that the array must contain a majority element, in that case, we do not need the second check. Then the time complexity will boil down to O(N).

Space Complexity: O(1) as we are not using any extra space.

*/

