 function All_division(n){

    let divison = []
    for(i=1; i<=n ; i++){

        if(n%i == 0){

            divison.push(i)
        }
    }
    console.log(divison);
 }

 All_division(36);
 All_division(45);
