function selection_sort(arr){


    //here numbers are 13,46,30,24,52,9

    // rows starts from 0 i.e 13
for(i=0;i<= arr.length-2; i++){

    min = i ;


    // it compares 13 with all the numbers . if there is number less than 13. it returns min.
    for(j=i ; j<= arr.length-1; j++){

        if(arr[j]< arr[min]){

            min = j;
        }
    }

    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp ;

    //here the small number get at first. and 13 replace at the position where small number index comes
}
return arr ; 
}

console.log(selection_sort([13,46,30,24,52,9]));