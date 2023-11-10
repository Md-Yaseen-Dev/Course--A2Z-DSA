// function pattern20(n){

//     let str = ""
//     for(i =0 ; i < n ; i++) {


//         // stars
//         for(j =0 ; j<=i;j++){

//             str+= "*"
//         }

//         //space

//         for(k=0 ; k< 2*(n-1-i); k++){

//             str+= " "
//         }


//         //star
        
//         for(j =0 ; j<=i;j++){

//             str+= "*"
//         }

//         str+= "\n"
//     }

//     // downward pattern

//     for(i =1; i <=n; i++) {

//         // stars
//         for(j = n-i; j>=1;j--){

//             str+= "*"
//         }

//         //spaces

//         for(k =0 ; k< 2*i; k++){

//             str+=" "
//         }

//         //stars

//         for(j = n-i; j>=1;j--){

//             str+= "*"
//         }
//         str+="\n"
//     }

//     console.log(str)
// }

// pattern20(15)



// -------other method


function pattern_20(n){

    let str = "";

    let space = 2*n-2;
    for(i =1 ; i<= 2*n-1; i++){

        let stars = i ;

        if(i>n){stars =  2*n-i}

        //stars
        for(j =0; j< stars; j++){

             str+= "*"
        }

        //spaces
        for(k=1 ; k<=space; k++){

                        str+= " "
                    }
            

         //stars
        for(j =0; j< stars; j++){

            str+= "*"
       }

       if(i<n){
        space -=2;
       }
       else{
        space +=2;
       }
        str+="\n"
    }
    console.log(str)
}
pattern_20(5)