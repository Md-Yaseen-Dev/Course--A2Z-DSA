function pattern14(n){
    let str = "";
 
    for (i=0; i< n ; i++){

        for( j= 0; j<= i; j++){

            str+= String.fromCharCode(65+j);
        }
        str+="\n";
    }
    console.log(str);
}
pattern14(5)