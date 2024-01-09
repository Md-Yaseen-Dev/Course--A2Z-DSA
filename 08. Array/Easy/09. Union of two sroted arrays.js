// -----------Union of Two sorted arrays----------------------

// Problem statement: Given two sorted arrays, arr1 and arr2 of size n and m . find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.
// Note Elements in the union should be in ascending order.

// solution 1 :Using Map

// Our aim is to find the common elements in arr1 and arr2, and the distinct elements of arr1,arr2. Use a single map to find the frequencies of elements in arr1 and arr2.

//  As we are using only a single map the common element in arr1 and arr2 are treated as a single element for finding frequency. so there would be no duplicates.

// ------Why not unordered_map?---------------------

// In unordered_map the key are stored in random order.while in the map the keys are stored in sorted order. As we require elements of the union to be ascending order. using a map is preferable.

//  we can also use unordered_map but after finding the union of arr1 and arr2. we need to sort the union vector to get the elements of the union in sorted order.

//  new Map() - Creates a new Map object.

// set() - sets the value for a key in a Map

//  get() - Gets the value for a key in a Map.

function findUnion(arr1, arr2) {
  let freq = new Map();

  let union = [];

  for (let num of arr1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let num of arr2) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [num] of freq) {
    union.push(num);
  }

  return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13];

console.log(findUnion(arr1, arr2).join(" "));

// - > Time complexity:-  o(m+n)log(m+n). inserting a key   in map takes logNtime. where N is no of elements in map. At max map can store m+n elements {when there are no common elements and elements in arr, arr2 are distinct}. So inserting m+n th element takes lof(m+n) time. upon approximation across insertion of all elements in worst it would take O(m+n)log(m+n)time.

// Using HashMap also takes the same time. On average insertion in  unorderd_map takes O(1) time but sorting the union vector takes O((m+n)log(m+n)) time. Because at max union vector van have m+n elements.

// Space complexity: O(m+n){if Space of union arraylist is considered}

//  O(1) {if space of union ArrayList is not considered}

// ----------------solution-2    -----------------------------

// Suppose we consider arr1 and arr2 as a single array say arr,  then the union of arr1 and arr2 is the distinct elements in arr.

// Example:
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// arr = arr1 + arr2 = {1,2,3,4,5,67,8,9,
//                      10,2,3,4,4,5,11,12}

// Distinct element in
// arr = {1,2,3,4,5,6,7,8,9,10,11,12}
//     = Union of arr1 ,arr2.
// So using a set we can find the distinct elements because the set does not hold any duplicates. Hence we can find the union of arr1 and arr2.

// Why not unordered_set?
// In unordered_set the elements are stored in random order, while in a set the keys are stored in sorted order (ascending order by default). As we require elements of the union to be in ascending order, using a set is preferable.

// We can also use unordered_set, but after finding the union of arr1 and arr2, we need to sort the union vector to get the elements of the union in sorted order.

//  new Set()  -- creates a new set object.

//  add() -- Adds a new element to the Set.

function findUnion1(arr3, arr4) {
  const set = new Set();

  const union = [];

  for (let num of arr3) {
    set.add(num);
  }

  for (let num of arr4) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
  }
  return union.sort((a, b) => a - b);
}

const arr3 = [1, 0, 2, 3, 4, 6, 7, 8, 10];

const arr4 = [1, 4, 5, 6, 9, 11, 12, 14, 2];

console.log(findUnion1(arr3, arr4));

// Time Compleixty : O( (m+n)log(m+n) ) . Inserting an element in a set takes logN time, where N is no of elements in the set. At max set can store m+n elements {when there are no common elements and elements in arr,arr2 are distntict}. So Inserting m+n th element takes log(m+n) time. Upon approximation across inserting all elements in worst, it would take O((m+n)log(m+n) time.

// Using HashSet also takes the same time, On average insertion in unordered_set takes O(1) time but sorting the union vector takes O((m+n)log(m+n))  time. Because at max union vector can have m+n elements.

// Space Complexity : O(m+n) {If Space of Union ArrayList is considered}

// O(1) {If Space of union ArrayList is not considered}

// ----------SOlution-3-------------------

// Solution 3: Two Pointers
// Solution 1 and 2 work for the unsorted arrays also, The arrays arr1 and arr2 are sorted, can we use this property to reduce the time Complexity?

// Using the property that the arrays are sorted we can bring down the time complexity from

// O((m+n)log(m+n))    TO    O(m+n).
// Approach:
// Take two pointers let’s say i,j pointing to the 0th index of arr1 and arr2.
// Create an empty vector for storing the union of arr1 and arr2.
// From solution 2 we know that the union is nothing but the distinct elements in arr1 + arr2
// Let’s traverse the arr1 and arr2 using pointers i and j and insert the distinct elements found into the union vector.
// While traversing we may encounter three cases.

// arr1[ i ] == arr2[ j ]
// Here we found a common element, so insert only one element in the union. Let’s insert arr[i] in union and increment i.

// NOTE: There may be cases like the element to be inserted is already present in the union, in that case, we are inserting duplicates which is not desired. So while inserting always check whether the last element in the union vector is equal or not to the element to be inserted. If equal we are trying to insert duplicates, so don’t insert the element, else insert the element in the union. This makes sure that we are not inserting any duplicates in the union because we are inserting elements in sorted order.
// arr1[ i ]  < arr2[ j ]
// arr1[ i ] < arr2[ j ] so we need to insert arr1[ i ] in union.IF last element in  union vector is not equal to arr1[ i ],then insert in union else don’t insert. After checking Increment i.
// arr1[ i ] > arr2[ j ]
// arr1[ i ] > arr2[ j ] so we need to insert arr2[ j ] in union. IF the last element in the union vector is not equal to arr2[ j ], then insert in the union, else don’t insert. After checking Increment j. After traversing if any elements are left in arr1 or arr2 check for condition and insert in the union.

function findUnion(arr1, arr2) {
  let i = 0,
    j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else {
      // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
    j++;
  }

  return union;
}

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr6 = [2, 3, 4, 4, 5, 11, 12];

const union = findUnion(arr5, arr6);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));

//  Time Complexity: O(m+n), Because at max i runs for n times and j runs for m times. When there are no common elements in arr1 and arr2 and all elements in arr1, arr2 are distinct.

// Space Complexity : O(m+n) {If Space of Union ArrayList is considered}

// O(1) {If Space of union ArrayList is not considered}

// --------------- Solultion :4 -----------------

function find_uni(arr7, arr8) {
  let union = [];

  for (let num of arr7) {
    union.push(num);
  }
  for (let num of arr8) {
    if (!arr7.includes(num)) {
      union.push(num);
    }
  }
  return union;
}

let arr7 = [1, 3, 4, 5];
let arr8 = [2, 6, 3, 8, 10];

console.log(find_uni(arr7, arr8));
