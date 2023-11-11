function pattern20(n){

    let str = "";

    for(i=0; i< 4 ; i++){

        for(j=0; j<4; j++){

            if(i==0 || j == 0 || i == n-1 || j == n-1){

                str+="*"
            }
            else{

                str+=" ";
            }
        }
        str+="\n";
    }
console.log(str);
}

pattern20(4);