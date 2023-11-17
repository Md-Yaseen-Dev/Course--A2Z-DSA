// -------------Parameterised recursion------------

function Parameterised(i, sum){

    if(i<1){

        console.log(sum);
        return;
    }
else{

    Parameterised(i-1, sum+i);
}
}

Parameterised(10,0);



//  ------------functional recursion------


function fun(n){

    if(n ==0){
        return 0;
    }
    return n + fun(n-1)
}
console.log(fun(5));


// factorial 1-N


function fact(n){

    if(n ==1){
        return 1;
    }
     n  * fact(n-1);
}
fact(5)