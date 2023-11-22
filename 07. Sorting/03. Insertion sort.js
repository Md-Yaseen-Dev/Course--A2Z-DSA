function insertion_sort(arr) {
  for (i = 0; i <= arr.length; i++) {
    j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {

        let temp = arr[j-1];

        arr[j-1] = arr[j];

        arr[j] =  temp;

        j--
    }
  }
  return arr;
}

console.log(insertion_sort([14, 18, 12, 6, 8, 13]));
