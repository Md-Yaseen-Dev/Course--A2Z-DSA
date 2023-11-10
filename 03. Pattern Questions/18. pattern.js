function pattern18(n){

    let str = ""
    for(i =1; i<=n ; i++){

        let count = n-i;
        for(j=1 ; j<= i ; j++){
            
            str+= String.fromCharCode(65+count) + " ";
               count++;
        }

        str+="\n"

    }
    console.log(str)
}

pattern18(9)