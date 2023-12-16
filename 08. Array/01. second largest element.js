//  Basic of array

//  Array is nothing but a data structures which contains similar elements. It can be integers,string,booleans i.e it contain any kind of data type.

function largest_number(arr){
let largest_num =  arr[0]; 
let secondlargest_num =  -1;
let secondsmallest_num 

for( i = 0 ; i< arr.length; i++){

    if(arr[i] > largest_num){

        secondlargest_num = largest_num ;
        largest_num  = arr[i]
    }
        else if(arr[i] > secondlargest_num && arr[i] != largest_num)

    secondlargest_num = arr[i]

    }
return secondlargest_num
}

console.log(largest_number([5,4,3,21,42,2]));



// -------------Time complexity

//  1. first pass largest  = > o(N) ;
// 2. The algorithm taking two passes n+n  => 0(2n);
// 3. 