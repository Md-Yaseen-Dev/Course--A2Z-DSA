// <!--  Remove Duplicates in place form sorted array -->


// <!-- Problem statement :-  Given an integer array sorted in non decreasing order, remove the duplictes in place such that each unique element appears only once. the relative order of the elements should be kept the same.

// If there are k elements after removing the duplcates, then the first k elemnets of the array should hold the final result. It does not matter what you leave beyond the first k elements.

// Note:-  return k after placing the final result in the first k slots of the array. -->


// <!--  example 1

// Input : arr[1,1,2,2,2,3,3]

// ouptut : arr[1,2,3,_,_,_,_] 

// Explanation :- Total number of unique elements are 3, i.e [1,2,3] and Therefore return 3 after assigning  [1,2,3] in the beginning of the array.-->




// <!-- Brutal force approach -->


//  Intuition:  We have to think of a data stucture that does not store duplicates elments. So can we use a Hash set? Yes! We can. As we know HashSet only stores unique elements. 

//  <!--- Approach:>

// 1. Declare a HashSet.
// 2. Run a for loop from starting to the end.
// 3. Put every elemnet of the array in the set.
// 4. store size of the set in a variable K.
// 5. Now put all elements of the set in the array from the starting of the array.
// 6. Return k.

function removeduplicates(arr){

    //  A javascript Set is a collection of unique values.
    let set = new Set(arr);

    let uniqueArr = Array.from(set);


    for(let i =0 ;  i < uniqueArr.length; i++){

        arr[i] = uniqueArr[i]
    }

    return uniqueArr.length
}

const arr = [1,1,2,2,3,3,3]

const k  = removeduplicates(arr);

console.log("the array after removing");

for (let i = 0; i < k; i++) {
console.log(arr[i])    
}

//  Time complexity: - )( n*log(n) + O(n))

// space complexity :- O(n)


// <!---- Optimal approach ---------->

//  Intuition: we can think of using two pointer 'i' and 'j' we move 'j' till we don't get a number arr[j] which is different from arr[i]. As we got a unique nummber we will increase the i pointer and update its value by arr[j]


//  <!-------------------Approach ---------------->


// 1. Take a variable i as 0;
// 2. Use a for loop by using a variable 'j' from 1 to length of the array.
// 3. if arr[j]!= arr[i], increase i and update arr[i] = arr[j]
//4. after completion of the loop return i+1 , i.e size of the array of unique elements.


function removeDuplicates(arr){
    let i =0 ;
    for(let j =1 ; j<arr.length; j++){
        if(arr[i] !== arr[j]){

            i++;
            arr[i] = arr[j]
        }
    }
    return i+ 1;
}


const arr1 = [1,1,2,2,3,3,3]

const k1  = removeDuplicates(arr1);

console.log("the array after removing in optimal approach");

for (let i = 0; i < k1; i++) {
console.log(arr1[i])    
}

// Time  complexity : O(N);

// space complexity : O(1);