// function paattern10(n){

// let str = "" ;

// for(i=0; i< n ; i++){

//     for(j=0; j<=i; j++){

//         str+="*"
//     }
//     str+="\n"
    
// }

// for(i=1; i< n ; i++){

//     for(j= i; j< n; j++){

//         str+="*"
//     }
//     str+="\n"
    
// }
// console.log(str)
// }

// paattern10(5)


// another method

// they are 9 rows , n is divided into two so


function pattern_10(n){

    let str = "";

    for(i = 1 ; i <= 2*n-1; i++){

        let stars = i ;
        if(i > n){

            stars = 2*n-i;
        }
    
        for( j = 1; j<=stars; j++){

            str+= "*";
        }
        str+="\n"
    }
    console.log(str)


}
pattern_10(5)