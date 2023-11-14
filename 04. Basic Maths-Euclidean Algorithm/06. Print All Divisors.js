//  function All_division(n){

//     let divison = []
//     for(i=1; i<=n ; i++){

//         if(n%i == 0){

//             divison.push(i)
//         }
//     }
//     console.log(divison);
//  }

//  All_division(36);
//  All_division(45);




function all_division(n){

    let arr = []; 

    for(i=1; i<= Math.sqrt(n) ; i++){

        if(n%i == 0){

            arr.push(i);

            if(n/i != i){
                arr.push(n/i)
            }
        }
    }

    console.log(arr.sort((a,b)=>{return a - b}))
}

all_division(36);