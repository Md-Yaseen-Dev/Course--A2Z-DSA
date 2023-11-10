function pattern19(n){

    let str = ""
    for(i=0; i< n ; i++){


        // stars
        for(j=n-i ; j>0 ; j--){

            str+= "*"
        }

        //space

        for(k =0 ; k < 2*i; k++){

            str+= " "
        }

          // stars
          for(j=n-i; j>0 ; j--){

            str+= "*"
        }
str+="\n"
    }


    //------downward pattern

    for(i=0; i< n ; i++){


        // stars
        for(j=0 ; j<=i ; j++){

            str+= "*"
        }

    

    //space

    for(k =0 ; k < 2*(n-1-i); k++){

        str+= " "
    }

    // stars
    for(j=0 ; j<=i ; j++){

        str+= "*"
    }

    str+="\n";
    }
    console.log(str)
}
pattern19(5)