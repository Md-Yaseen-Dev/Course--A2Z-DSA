function pattern22(n){

    let str = ""

    for(i=0; i < 2*n-1; i++){

        for(j=0; j < 2*n-1; j++){


    let top = i ; 
    let left = j ; 
    let right = 2*n-2-j;
    let bottom = 2*n-2-i

    
    str+= n-Math.min(Math.min(top,bottom), Math.min(right,left)) + " "
        }
str+="\n"
    }
console.log(str)
}

pattern22(9)