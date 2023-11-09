function pattern4(n) {
  let str = "";
  for (i = 1; i <=n; i++) {
    for (j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  console.log(str);
}

pattern4(5);
