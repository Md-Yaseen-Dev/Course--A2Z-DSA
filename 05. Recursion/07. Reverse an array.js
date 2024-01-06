//  -----------------Reverse an array using Recursion ----------


let arr1 = [2,4,6,8,10];
console.log(arr1);

function recursionarr(arr1,start,end){

    if(start>end){
        return arr1;
    }

    [arr1[start] , arr1[end ] ] = [arr1[end], arr1[start]];

    return recursionarr(arr1, start+1, end-1)
}


console.log( recursionarr(arr1,0,arr1.length-1) )

// Time complexity: O(N);
// space complexity : O(N);



// ------- using for loop ------


let arr = [1,2,3,4,5];
console.log(`Normal array using loops :${arr}`)
function reverseArr(arr, size) {
    for(let i=0, j=size-1; i<(size)/2; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return  arr
   }
   console.log(reverseArr(arr,arr.length));

