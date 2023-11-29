//  merge sort  (arr, low , high)


function mergeSOrt(arr){

    if(arr.length <=1) return arr

let mid = Math.floor((arr.length/2))

let left = mergeSOrt(arr.slice(0,mid));
let right = mergeSOrt(arr.slice(mid));

return mergeSOrt[left,right]
}
console.log(mergeSOrt([4,5,6,7,1,2,3]
    ))