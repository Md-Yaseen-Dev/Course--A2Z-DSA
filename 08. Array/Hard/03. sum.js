//  find triplets that add up to zero.

//  Problem statement : Given an array of N integers your task is to find uni


//  algorithm.

//  In this question, it is clearly stated that for each case the picked indices i.e i, j and k must be distinct. This means [arr1,arr[1],arr[2],arr[0]] and [arr[0], arr[1], arr[2]] will be considered the same.


//  intution

//  This approach is pretty staight forward. here we will check all possible triplets using  3 loops and amonng them, we will consider the ones whose sum is equal to th given target i.e o and before considering them as our anser  we need to sort the triplets in ascending order so that we can consider onl the unique ones.

//  Algorithm:

//  The steps are as follows

//  1.First, we will declare a set data structure as we want unique triplets.

// 2. THen we wil use the first loop that will run from 0 to n-1.

//  3. inside it, there  will be the second loop that  wlll run i+1 to n -1.

//  4. thenthere will be the third loop that runs form h+1 to n-1;

// 5. NOw inside there 3 Nested loops we will check the sum i.e arr[i]+arr[j]+ arr[k] and it is equal to the target i.e 0 wee will sort this triplet and insert it in the set data structure.

// 6. finally we will return the list of triplets stord in the set data  structure.


function triplet(n, arr){

    let st = new Set();

    let ans = [];

    for(let i=0 ; i<n; i++){


        for(let j = i+1; j< n ; j++){


            for(let k = j+1; k <n; k++) {

                if(arr[i]+ arr[j]+ arr[k]){
                    let temp = [arr[i], arr[j], arr[k]];

                    temp.sort((a,b) => a-b);

                    ans.push(temp)
                }
            }
        }
    }

    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);

    return ans
}


let arr =[-1,0,1,2,-1,-4];

let n = arr.length;

let ans = triplet(n, arr);


for(let it of ans){

    process.stdout.write("[");

    for (let i of it) {
        process.stdout.write(i + " ");
    }
    process.stdout.write("] ");

}


/*Time Complexity: O(N3 * log(no. of unique triplets)), where N = size of the array.
Reason: Here, we are mainly using 3 nested loops. And inserting triplets into the set takes O(log(no. of unique triplets)) time complexity. But we are not considering the time complexity of sorting as we are just sorting 3 elements every time.

Space Complexity: O(2 * no. of the unique triplets) as we are using a set data structure and a list to store the triplets.

*/