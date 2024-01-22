// Program to generate Pascal’s Triangle
// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.



// Variation 1
// In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c). 

// Naive Approach
// In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c). 

// One of the Naive approaches is to generate the entire Pascal triangle and then find the element at position (r,c). We will discuss in variation 3 how to generate Pascal’s triangle.

// We have an easier formula to find out the element i.e. r-1Cc-1. Let’s try to analyze the formula to find the value of the combination assuming r-1 as n and c-1 as r:

// nCr = n! / (r! * (n-r)!)
// Calculating the value of nCr:

// Naive Approach: 

// We can separately calculate n!, r!, (n-r)! and using their values we can calculate nCr. This is an extremely naive way to calculate. The time complexity will be O(n)+O(r)+O(n-r)


function nCr(n,k){

    let res = 1;

    for(let i = 0; i<k; i++){

        res = res*(n-i);
res = res /(i+1)
    }

    return res ;
}


function pascalTriangle(r,c){

    const element = nCr(r-1,c-1);

    return element;

}

console.log(pascalTriangle(6,3));


// Output: The element at position (r,c) is: 6

// Complexity Analysis
// Time Complexity: O(c), where c = given column number.
// Reason: We are running a loop for r times, where r is c-1.

// Space Complexity: O(1) as we are not using any extra space.