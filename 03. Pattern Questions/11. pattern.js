function pattern11(n){

    let str = "";
let start =1;
    for(i=1; i <=5; i++){

    
        if(i%2 != 0)
        {
            start =1 ;
        }
else{
    start = 0 ; 

}
for(j=1; j<=i; j++){

    str+=start;

    start = 1-start; // to flip the numbers
     
}
str+="\n"
    }
    console.log(str)
}
pattern11(5)