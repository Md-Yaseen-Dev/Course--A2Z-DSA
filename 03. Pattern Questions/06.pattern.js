function pattern6(n) {
    let str = "";
    for (i = 1; i <=n; i++) {
      for (j = 1; j <= n-i+1; j++) {
        str += j;
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern6(5);