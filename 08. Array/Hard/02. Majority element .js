// -------------------------Majority elements (>N/3 times) ------------------------------


// Problem statement : Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.


// Algorithm / Intuition
// Solution:
// Observation: How many integers can occur more than floor(N/3) times in the given array:

// If we closely observe, in the given array, there can be a maximum of two integers that can occur more than floor(N/3) times. Let’s understand it using the following scenario:
// Assume there are 8 elements in the given array. Now, if there is any majority element, it should occur more than floor(8/3) = 2 times. So, the majority of elements should occur at least 3 times. Now, if we imagine there are 3 majority elements, then the total occurrence of them will be 3X3 = 9 i.e. greater than the size of the array. But this should not happen. That is why there can be a maximum of 2 majority elements.

// Naive Approach (Brute-force): 
// We will run a loop that will select the elements of the array one by one.
// Now, for each unique element, we will run another loop and count its occurrence in the given array.
// If any element occurs more than the floor of (N/3), we will include it in our answer. 
// While traversing if we find any element that is already included in our answer, we will just skip it.
// Note: For a better understanding of intuition, please watch the video at the bottom of the page.






function majorityElement(v) {
    const n = v.length; // size of the array
    const ls = []; // list of answers

    for (let i = 0; i < n; i++) {
        // selected element is v[i]:
        // checking if v[i] is not already
        // a part of the answer:
        if (ls.length == 0 || ls[0] != v[i]) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                // counting the frequency of v[i]
                if (v[j] == v[i]) {
                    cnt++;
                }
            }

            // check if frequency is greater than n/3:
            if (cnt > Math.floor(n / 3))
                ls.push(v[i]);
        }

        if (ls.length == 2) break;
    }

    return ls;
}

const arr = [11, 33, 33, 11, 33, 11];
const ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));


// Time Complexity: O(N2), where N = size of the given array.
// Reason: For every element of the array the inner loop runs for N times. And there are N elements in the array. So, the total time complexity is O(N2).

// Space Complexity: O(1) as we are using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.


