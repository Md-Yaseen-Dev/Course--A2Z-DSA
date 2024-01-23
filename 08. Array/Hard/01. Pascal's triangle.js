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


// -----------------------------Variation-2-------------------------------------------------------------

// Given the row number n. Print the n-th row of Pascal’s triangle.

// Our first observation regarding Pascal’s triangle should be that the n-th row of the triangle has exactly n elements. With this observation, we will proceed to solve this problem.

// Naive Approach
// In this approach, for every column from 1 to n, we will calculate the element (n, c)(where n is the given row number and c is the column number that will vary from 1 to n) using the previous method. Thus, we will print the row.  

// Algorithm / Intuition
// In this approach, for every column from 1 to n, we will calculate the element (n, c)(where n is the given row number and c is the column number that will vary from 1 to n) using the previous method. Thus, we will print the row.  

// Approach:
// The steps are as follows:

// We will use a loop(say c) to iterate over each column i.e. from 1 to n. And for each column, we will do the following steps:
// First, we will consider n-1 as n and c-1 as r.
// After that, we will simply calculate the value of the combination using a loop. 
// The loop will run from 0 to r. And in each iteration, we will multiply (n-i) with the result and divide the result by (i+1).
// Finally, we will print the element.
// Finally, the entire row will be printed.
// Note: For a better understanding of intuition, please watch the video at the bottom of the page.



function ncr1(n,r){

    let res =1 ;

    //  // calculating nCr:
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
      }
      return res;
}
function pascalTriangle_1(n){

    for(let c = 1; c<=n; c++){

        console.log( ncr1(n-1,c-1))
    }
}

pascalTriangle_1(5);

// Time Complexity: O(n*r), where n is the given row number, and r is the column index which can vary from 0 to n-1.
// Reason: We are calculating the element for each column. Now, there are total n columns, and for each column, the calculation of the element takes O(r) time where r is the column index.

// Space Complexity: O(1) as we are not using any extra space.


// -----------------------------------variation 3-----------------------------


// We will try to build intuition for this approach using the following observations.


// Here, we can observe that the numbers marked in red are added to the previous number to build the current number. In each step, the numerator is multiplied by the previous consecutive element, and the denominator is multiplied by the next consecutive element.

// We will replicate this in our algorithm. First, we will mark the indices of the column starting from 0. Then we will simply multiply the numerator by (n-index) and the denominator by the index itself.

// From column no. 1 the formula will be the following:

// Current element = prevElement * (rowNumber - colIndex) / colIndex
// Approach:
// The steps are as follows:

// First, we will print the 1st element i.e. 1 manually.
// After that, we will use a loop(say i) that runs from 1 to n-1. It will print the rest of the elements.
// Inside the loop, we will use the above-said formula to print the element. We will multiply the previous reswer by (n-i) and then divide it by i itself.
// Thus, the entire row will be printed.


// Note: If we want to store the row elements, we just need to store each element instead of printing it.

// Note: For a better understanding of intuition, please watch the video at the bottom of the page.


function pascalTriangle_2(n){

    let res =1;

    console.log(res + " ");
  
    //Printing the rest of the part:
    for (let i = 1; i < n; i++) {
      res = res * (n - i);
      res = res / i;
      console.log(res + " ");
    }
}
  
pascalTriangle_2(5);

// Time Complexity: O(N) where N = given row number. Here we are using only a single loop.

// Space Complexity: O(1) as we not using any extra space.