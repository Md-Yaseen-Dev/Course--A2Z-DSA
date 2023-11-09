function pattern4(n) {
    let str = "";
    for (i = 1; i <=n; i++) {
      for (j = 0; j < n-i+1; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern4(5);