// ---------05. Sum of first N numbers----------


function Parameterised(i, sum){

    if(i<1){
        return sum;
    }

return Parameterised(i-1, sum+i);

}

console.log(Parameterised(50,0));

// Time Complexity:The function makes a recursive call Parameterised(i-1, sum+i) until i < 1. The number of recursive calls made is directly proportional to the value of i. Since the function decrements i by 1 in each recursive call, the time complexity can be expressed as O(i). Therfore the Time complexity: O(N)

// Space Complexity:
// The space complexity is determined by the maximum depth of the recursion stack. For each recursive call, the function stores the current value of i and sum on the call stack until the base case is reached (i < 1). Since the function is making recursive calls i times, the maximum depth of the recursion stack will be i. Therefore, the space complexity is O(i).

// In the provided code, Parameterised(50, 0) is called, so it would have a time complexity of O(50) and a space complexity of O(50), although the actual values might vary depending on the language or implementation details.
// Space complexity :- O(N)

//  ------------functional recursion------


function fun(n){

    if(n ==0){
        return 0;
    }
    return n + fun(n-1)
}
console.log(fun(100));


// TIme complexity : O(N);
// space complexity : O(N);