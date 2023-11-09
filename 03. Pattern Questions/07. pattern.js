function pattern7(n) {
    let str = "";
    for (i = 0; i < n; i++) {

        //space
      for (j = 0; j < n-i-1; j++) {

        str += " ";
      }
      //star
      for (k = 0 ; k < 2*i+1; k++){

        str+="*"
      }
      //space
      for (j = 0; j < n-i-1; j++) {

        str += " ";
      }

      str += "\n";
    }
    console.log(str);
  }
  
  pattern7(5);