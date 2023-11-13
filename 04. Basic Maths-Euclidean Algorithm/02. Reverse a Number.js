
function Reverse(n){

    let Reverse_num = 0;

    while(n>0){

        lastdigit = n%10;
        Reverse_num = (Reverse_num*10) + lastdigit;
        n = Math.trunc(n/10);
    }
console.log(Reverse_num);
}

Reverse(10400)