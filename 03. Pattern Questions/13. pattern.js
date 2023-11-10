function pattern13(n){

    let str ="";
    let count =1 ;

    for(let i=1; i <=5; i++){

        for(j=1; j<=i;j++){

            str+= count + " ";
            count++;
        }

        str+="\n"
    }
    console.log(str);
}
pattern13(5)