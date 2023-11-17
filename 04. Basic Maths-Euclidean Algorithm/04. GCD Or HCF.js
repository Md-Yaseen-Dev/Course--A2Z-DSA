 function Gcd_1(n1,n2){

    let gcd =1
    for(i=1; i<= Math.min(n1,n2); i++){

        if(n1% i == 0  && n2%i == 0){

gcd = i        }
    }
    console.log(gcd)
 }

 Gcd_1(12,18);
 Gcd_1(11,18);


//  second method i.e equalateral algorithm


function gcd_2(a,b){

while(a> 0 && b>0){

if(a>b){

    a = a%b;
}
else{
    b= b%a;
}
}

if(a==0){
    console.log(b)
}
else{
    console.log(a)
}

}

gcd_2(15,30);
gcd_2(5,30);
gcd_2(18,11);
gcd_2(12,18);
