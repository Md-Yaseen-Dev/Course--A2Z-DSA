function pattern5(n) {
    let str = "";
    for (i = 1; i <=n; i++) {
      for (j = 0; j < n-i+1; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern5(5);

//   other method

function pattern_5(n) {
    let str = "";
    for (i = 1; i <=n; i++) {
      for (j = 5; j >= i; j--) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern_5(5);