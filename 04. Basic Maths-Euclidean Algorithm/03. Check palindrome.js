 function palindrome(n){

    let duplicate = n ;

    let reverse_num = 0 ;

    while(n>0){

        lastdigit = n%10;
        reverse_num = (reverse_num*10) + lastdigit;
          n = Math.trunc( n/10);
    }

return ( reverse_num == duplicate) ? "it is plaindrome" : "it is not a plaindrome"
 }

 console.log(palindrome(1221));
 console.log(palindrome(1241));

