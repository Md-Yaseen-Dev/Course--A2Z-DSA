//   Two sum :- check if a pair with given sum exists in array.

// Problem statment: Given an array of integers arr[] and an integer target.

// 1st variant :Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.


// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// ex:-1

/*
Input format : N=5, arr[] = {2,6,5,8,11}, target 14

Result: yes(for 1st variant)
[1,3](for 2nd variant);

explaination :arr[1] 
+ arr[3] = 14. so the answer is Yes for the first variant a nd [1,3] for 2nd variant.
*/


// ------------Naive approach(brute force approach)


let arr = [2,6,5,8,11];
let target  = 15;
function sum_2(arr, target){
let var_2 = []
for(let i = 0 ; i<arr.length; i++){
    for(j = i+1; j<arr.length; j++){
        if(arr[i] +  arr[j] == target){
            var_2.push(i);
            var_2.push(j);
        }

    }
}

return (var_2 == []) ? var_2 : [-1,-1];
}

console.log(sum_2(arr, target))



//  TIme complexity : O(N2), where N= size of the array

// Reasons : There are two loops(i.e nested) each running for approximately N times.

//  Space complexity : 0(N1)




// ------------------------Optimal approach -------------------


/*
The steps are the following:

We will sort the given array first.
Now, we will take two pointers i.e. left, which points to the first index, and right, which points to the last index.
Now using a loop we will check the sum of arr[left] and arr[right] until left < right.
If arr[left] + arr[right] > sum, we will decrement the right pointer.
If arr[left] + arr[right] < sum, we will increment the left pointer.
If arr[left] + arr[right] == sum, we will return the result.
Finally, if no results are found we will return “No” or {-1, -1}.


*/


function sum_2a(arr, target){

    let left = 0 ;
    let right = arr.length-1;

    let var_2 = []

    while(left < right){

        let sum = arr[left]  + arr[ right];

        if(sum == target){
            
            var_2.push(left);
            var_2.push(right);

        }
        else if(sum < target){
            left++
        
        }
        else{left--}
    }

    return  var_2
}

console.log(sum_2a(arr, target));


// TIme Complexity: O(N) + O(N*logN), where N = size of the array.
// Reason: The loop will run at most N times. And sorting the array will take N*logN time complexity.

// Space Complexity: O(1) as we are not using any extra space.