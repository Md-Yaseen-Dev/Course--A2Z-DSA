function bubble_sort(arr){

    for(i=arr.length-1; i >=1; i--){    
        for(j=0; j<= i-1; j++){

            if(arr[j]>arr[j+1]){
    
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;
            }

        }
    }
    return arr ; 
    }
    
    console.log(bubble_sort([13,46,30,24,52,9]));