// ----------------- Selection sort algorithm --------------

// Problem statement: - Given an array of N integers, write a program to implement the Selection sorting algorithm


// ----------------Approach:

// 1. First, we will select the range of the unsorted array using a loop that indicates the starting index of the range.  
// The loop will run forward from 0 to n-1. The value i - 0 means the range is from 0 to n-1 and similarly i =1 means the range is from 1 to n-1 and so on.

// 2. Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.

//3. After that,we will swap the minimum element with the first element of the selected range.

// 4. Finally, after each iteration, we will find that the array is sorted up to the first index of the range.

function selection_sort(arr){


    //here numbers are 13,46,30,24,52,9

    // rows starts from 0 i.e 13
for(i=0;i<= arr.length-1; i++){

    min = i ;  // i=0


    // it compares 13 with all the numbers . if there is number less than 13. it returns min.
    for(j=i ; j<= arr.length-1; j++){

        if(arr[j]< arr[min]){

            min = j; //  min = 5 ; here j =5
        }
    }

    var temp = arr[min];  //temp = arr[5] (arr[5] = 9);
    arr[min] = arr[i];    // arr[5] = arr[0]  (arr[i] = 13);
    arr[i] = temp ; // arr[i] = 9 ;

    //here the small number get at first. and 13 replace at the position where small number index comes
}
return arr ; 
}



console.log(selection_sort([13,46,30,24,52,9]));