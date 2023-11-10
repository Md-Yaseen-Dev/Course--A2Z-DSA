function pattern12(n){

    let str = "";
let space = 2*(n-1);
    for(i =1; i<=n; i++){

        // numbers

        for(j=1;j<=i; j++){

            str+= j
        }``
        // spaces
        for (k=1; k<=space; k++){

            str+= " "
        }
        //reverse numbers

        for(j=i;j >=1; j--){

            str+= j
        }
        str+="\n";
        space -=2;

    }
    console.log(str)
}
pattern12(4)