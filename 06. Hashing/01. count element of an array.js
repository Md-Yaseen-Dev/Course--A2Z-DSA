let arr = [1,2,4,1,1,9];


function element(arr, number){

    let count = 0 ;

    for (i =0 ; i< arr.length; i++){

        if(arr[i] == number){

            count++
        }
        count += 0;
      
    }
    return count ;
}

console.log(element(arr, 1));


