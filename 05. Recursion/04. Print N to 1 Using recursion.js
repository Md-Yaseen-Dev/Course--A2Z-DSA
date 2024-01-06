//  ----------- Print  N to 1 Using recursion -------------

function reverse(i , n){

    let count = 0 ;
    if(i>n){
        return;
    }
    else{
        // console.log("before recursion :" + i );
        reverse(i+1,n);
        console.log("after recursion : " + i);

    }

}

reverse(1,7);

// Time Complexity: O(N);

// Space Complexity: O(N)