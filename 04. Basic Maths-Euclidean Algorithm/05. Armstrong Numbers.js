 function armstrong(n){

    let orginal  = n ; 
    let armstrong = 0

    while(n>0){

        lastdigit = n%10;
armstrong += Math.pow(lastdigit,3);
n = Math.trunc( n/10);

    }
return (armstrong == orginal)? "it is an armstrong" : "it is not an armstrong"

 }
 console.log(armstrong(371));
 console.log(armstrong(471));
 