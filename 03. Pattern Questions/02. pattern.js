function pattern2(n) {
  let str = "";

  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

pattern2(5);
