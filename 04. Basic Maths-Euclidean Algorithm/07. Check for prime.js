function isprime(n) {
  let count = 0;

  for (i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }

  if (count == 2) console.log("it is a prime");
  else {
    console.log("it is not a prime");
  }
}

isprime(36);
isprime(3);
isprime(11);



