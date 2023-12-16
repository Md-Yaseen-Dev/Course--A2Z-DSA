

function secondsmallest_num(arr){
    let smallest_num =  arr[0]; 
    let ssmallest_num = Number.MAX_VALUE
    
    for( i = 0 ; i< arr.length; i++){
    
        if(arr[i] < smallest_num){
    
            ssmallest_num = smallest_num ;
            smallest_num  = arr[i]
        }
            else if(arr[i] < ssmallest_num&& arr[i] != smallest_num)
    
        ssmallest_num= arr[i]
    
        }
    return ssmallest_num
    }
    
    console.log(secondsmallest_num([5,4,3,21,42,2,1]));
    
    
    
    // -------------Time complexity
    
    //  1. first pass largest  = > o(N) ;
    // 2. The algorithm taking two passes n+n  => 0(2n);
    // 3. 