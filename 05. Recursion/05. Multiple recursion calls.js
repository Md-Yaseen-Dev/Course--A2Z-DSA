// using recursion ---fibonaccci number

function fibonaccci(n){

    if(n<=1){
        return n;
    }
      return fibonaccci(n-1) +fibonaccci(n-2)
}

console.log(fibonaccci(5));


// using loops

function loop_fibonaci(n){

    let n1 = 0 ; let n2 =1 ;

    for(i=2; i<=n ; i++){

        nextterm = n1+n2;
        n1= n2;
        n2= nextterm;
    }
    return nextterm
}
console.log(loop_fibonaci(10))