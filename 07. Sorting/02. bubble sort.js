function bubble_sort(arr){

    // bubble sort compare with first value to second value , i.e  13 >46 then  46 >30 from first to end. 
// again same process until the first value get the least value.

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


    
function bubbley(arr){
    
    for(i=0 ; i <=arr.length; i++){    
        for(j=0; j<= arr.length-1; j++){

            if(arr[j]>arr[j+1]){
    
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;
            }

        }
    }
    return arr ; 
    }

    console.log(bubbley([5,7,9,2,3,1,16]))