// ------------------Stock Buy and sell--------------------------

// Problem statement:  You are given an array of prices where prices[i] is the price of a given stock on an ith day.


//  You want to maximize your profit by chooding a single day to buy one stock and choosing a differnct day in the future to sell that stock. Teturn the maximum profit you can achieve from this transaction.if you cannot achieve any profit return 0.


// Algorithm / Intuition
// Intuition: We can simply use 2 loops and track every transaction and maintain a variable maxPro to contain the max value among all transactions.

// Approach: 

// Use a for loop of ‘i’ from 0 to n.
// Use another for loop of j from ‘i+1’ to n.
// If arr[j] > arr[i] , take the difference and compare  and store it in the maxPro variable.
// Return maxPro.

let arr = [7,1,5,3,6,4];
function stock_BUY_sell(arr){

    let maxpro = 0;

    let n = arr.length;

    for(let i = 0 ; i<n; i++){

        for(let j = i+1; j<n; j++){

            if(arr[j] > arr[i]){

                maxpro = Math.max(arr[j]- arr[i], maxpro)
            }
        }
    }
    return maxpro
}

console.log(stock_BUY_sell(arr));


// TIme complexity:  O(n^2);

// space complexity :O(1)


// -----------------------Optimal approach----------------------

// Algorithm / Intuition
// Intuition: We will linearly travel the array. We can maintain a minimum from the start of the array and compare it with every element of the array, if it is greater than the minimum then take the difference and maintain it in max, otherwise update the minimum.

// Approach:

// Create a variable maxPro and store 0 initially.
// Create a variable minPrice and store some larger value(ex: MAX_VALUE) value initially.
// Run a for loop from 0 to n.
// Update the minPrice if it is greater than the current element of the array
// Take the difference of the minPrice with the current element of the array and compare and maintain it in maxPro.
// Return the maxPro.

function stock_BUY_sell1(arr){

    let maxpro = 0;
    let minPrice = Number.MAX_VALUE
let n = arr.length;

for(let i  =0 ; i<n; i++){

    minPrice = Math.min(minPrice, arr[i]);
  console.log(minPrice)
    maxpro = Math.max(maxpro,arr[i]-minPrice)
}
    return maxpro;
}

console.log(stock_BUY_sell1(arr));