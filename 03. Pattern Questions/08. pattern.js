function pattern7(n) {
    let str = "";
    for (i = 0; i < n; i++) {

        //space
      for (j = 0; j < i; j++) {

        str += " ";
      }
      //star
      for (k = 0 ; k < 2*n -(2*i+1); k++){

        str+="*"
      }
      for (j = 0; j < i; j++) {

        str += " ";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern7(5);