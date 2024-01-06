//  ----------- Print 1 to N Using recursion -------------

function upto_N(i,n){

    if(i>n){
        return ;
    }
else{
    console.log(i);

    upto_N(i+1,n)
}
}
upto_N(1,4);