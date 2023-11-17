//   print name 5 times

function Name_5times(a){

    if(a==0){
        return
    }
    else {

    console.log("yaseen");
    a--
    }
    Name_5times(a)
}
Name_5times(5);

// another method

function name1(i,n){

 if(i>n){
    return;

 }
 else{
    console.log("roshan");
    name1(i+1, n)
 }

}

name1(1,5);


// 2. Print (1-N)


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


// print n -1


function reverse(n){

    if(n < 1){
        return
    }
    else{
        console.log(n);

        reverse(n-1)
    }

}

reverse(7)