//  ______--------cOUNT MAXIMum consective ones in the array----------__________.


// Problem statement :- Givem am array that contains only 1 and 0 return the count of maximum consective ones in the array.


// Approach :- 

// We  Maintain a variable count that keeps a track of the number of consective 1's while traversing . The other variable max_count maintains the maximum of 1's  in other words, it maintains the answer.

// We start traversing from the beginning of the array. Since we can encounter either a 1 or 0 there can be two situations:-

// If  the value at the current index is equal to 1 we increase the value of count by one. After updating  the count variable if it becomes more than the max_count  update the max_count.
// If the value at the current index is equal to zero we make the variable count as 0 since there are no more consecutive ones.



function findMaxconsectiveones(arr){

let count = 0 ;

for(let i = 0 ; i<arr.length; i++){


    if(arr[i] == arr[i+1]){

        count++;
    }
}

return count;
}

const arr = [1,1,1,0,0,1];

console.log(findMaxconsectiveones(arr))

// output: The maximum consective 1's are 3



// TIme complexity : O(N);

// space complexity :O(1)