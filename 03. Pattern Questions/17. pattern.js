function pattern17(n){

    let str = ""
    for(i=0; i< n ; i++){

        // space

        for(j=0; j < n-i-1; j++){

            str+= " "
        }

        // name

let count =0;
        let breakpoint = (2*i+1);
        console.log(breakpoint);
        for (k=1 ; k <=2*i+1; k++){

            str+=String.fromCharCode(65+count);;

            if(k < breakpoint){
                count++
            }
            else{
                count--
            }
        }
    //space 
        for(j=0; j < n-i-1; j++){

            str+= " "
        }
str+="\n";
    }

    console.log(str)
}

pattern17(4)