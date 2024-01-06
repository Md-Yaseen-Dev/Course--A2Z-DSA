//   print name n times

function Name_5times(n){

    if(n==0){
        return
    }
    else {

    console.log("yaseen");
    n--
    }
    Name_5times(n)
}
Name_5times(5);

// ---another method----

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