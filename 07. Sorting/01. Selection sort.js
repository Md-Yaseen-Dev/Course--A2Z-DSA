function selection_sort(arr){

for(i=0;i<= arr.length-2; i++){

    min = i ;

    for(j=i ; j<= arr.length-1; j++){

        if(arr[j]< arr[min]){

            min = j;
        }
    }

    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp ;

}
return arr ; 
}

console.log(selection_sort([13,46,30,24,52,9]));