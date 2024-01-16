// ---------------Leaders in an array --------------------


/*
Intuition:
There is no special intuition needed here. Just a common fact that we need to compare elements in order to find the greatest is more than enough.

Approach
In this brute force approach, we start checking all the elements from the start of the array to the end to see if an element is greater than all the elements on its right (i.e, the leader).
For this, we will use nested loops where the outer loop will check for each element in the array whether it is a leader or not.
The inner loop checks if there is any element to the right that is greater than the element currently traversed by the outer loop.
We start by initializing the outer loop pointer to the start element and setting it as the current leader.
If any element traversed is found greater than the element currently set as a leader, it will not go to the ans array and we increment the outer loop pointer by 1 and set the next element as the current leader.
If we don’t find any other element to the right greater than the current element, then we push the current element to the ans array stating that is it the leader element.

*/





function printLeadersBruteForce(arr, n) {

    let ans = [];
  
    for (let i = 0; i < n; i++) {
      let leader = true;
  
      //Checking whether arr[i] is greater than all 
      //the elements in its right side
      for (let j = i + 1; j < n; j++)
        if (arr[j] > arr[i]) {
  
          // If any element found is greater than current leader
          // curr element is not the leader.
          leader = false;
          break;
        }
  
      // Push all the leaders in ans array.
      if (leader)
        ans.push(arr[i]);
  
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n = 6;
  let arr = [10, 22, 12, 3, 0, 6];
  
  let ans = printLeadersBruteForce(arr, n);
  
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
  

/*
Time Complexity: O(N^2) { Since there are nested loops being used, at the worst case n^2 time would be consumed }.

Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }. */


// -----------Optimal approach ---------------





function printLeaders1(arr, n) {

    let ans = [];
  
    // Last element of an array is always a leader,
    // push into ans array.
    let max = arr[n - 1];
    ans.push(arr[n - 1]);
  
    // Start checking from the end whether a number is greater
    // than max no. from right, hence leader.
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
  
  // Array Initialization.
  let arr1 = [10, 22, 12, 3, 0, 6];
  let n1 = arr1.length;
  
  let ans1 = printLeaders1(arr, n1);
  
  for (let i = ans1.length - 1; i >= 0; i--) {
    console.log(ans1[i]);
  }
  

//   Time Complexity: O(N) { Since the array is traversed single time back to front, it will consume O(N) of time where N = size of the array }.

// Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.