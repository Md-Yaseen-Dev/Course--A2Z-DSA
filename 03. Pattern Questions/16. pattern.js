function pattern16(n){

    let str = ""; 

    for(i=0; i< n; i++){

        for(j=0; j<=i; j++){

            str += String.fromCharCode(65+i);
        }
        str+="\n";
    }
    console.log(str)
}

pattern16(5)
